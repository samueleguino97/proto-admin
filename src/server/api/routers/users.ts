import { z } from "zod";
import e from "../../../../dbschema/edgeql-js";
import crypto from "crypto";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import { env } from "../../../env.mjs";
import { createMailer } from "../../mail";

export const usersRouter = createTRPCRouter({
  me: protectedProcedure.query(async ({ ctx }) => {
    const user = await e
      .select(e.User, (user) => ({
        id: true,
        name: true,
        email: true,
        status: true,
        user_role: {
          id: true,
          name: true,
          tenant: {
            id: true,
            name: true,
          },
        },
        filter_single: e.op(user.id, "=", e.uuid(ctx.user?.user_id || "")),
      }))
      .run(ctx.edge);

    if (!user) {
      throw new TRPCError({
        message: "Invalid user",
        code: "UNAUTHORIZED",
      });
    }

    return user;
  }),
  login: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const user = await e
        .select(e.User, (user) => ({
          id: true,
          name: true,
          email: true,
          password: true,
          salt: true,
          status: true,
          user_role: {
            id: true,
            name: true,
            tenant: {
              id: true,
              name: true,
            },
          },
          filter_single: e.op(user.email, "=", e.str(input.email)),
        }))
        .run(ctx.edge);

      if (!user) {
        throw new TRPCError({
          message: "Invalid email or password",
          code: "UNAUTHORIZED",
        });
      }

      const hash = crypto
        .pbkdf2Sync(input.password, user?.salt || "", 1000, 64, `sha512`)
        .toString(`hex`);

      if (hash === user?.password) {
        if (user?.status === "blocked") {
          throw new TRPCError({
            message: "User is not active",
            code: "UNAUTHORIZED",
          });
        }

        const token = jwt.sign(
          {
            user_id: user.id,
            email: user?.email,
            role: user?.user_role?.id,
            tenant_id: user?.user_role?.tenant?.id,
          },
          env.JWT_SECRET,
          {
            expiresIn: "24h",
            algorithm: "HS256",
          }
        );

        return {
          id: user?.id,
          token,
        };
      } else {
        throw new TRPCError({
          message: "Invalid email or password",
          code: "UNAUTHORIZED",
        });
      }
    }),

  resetPass: protectedProcedure
    .input(
      z.object({
        new_password: z.string(),
        reset_password_token: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const salt = crypto.randomBytes(16).toString("hex");
      const hash = crypto
        .pbkdf2Sync(input.new_password, salt, 1000, 64, `sha512`)
        .toString(`hex`);

      const res = await ctx.edge.transaction(async (tx) => {
        const user = await e
          .select(e.User, (user) => ({
            id: true,
            status: true,
            reset_password_sent_at: true,
            filter_single: e.op(
              user.reset_password_token,
              "=",
              e.str(input.reset_password_token)
            ),
          }))
          .run(tx);

        if (!user) {
          throw new TRPCError({
            message: "Invalid token",
            code: "UNAUTHORIZED",
          });
        }
        if (
          user?.reset_password_sent_at &&
          user?.reset_password_sent_at < new Date(Date.now() - 3600000)
        ) {
          throw new TRPCError({
            message: "Token expired",
            code: "UNAUTHORIZED",
          });
        }

        const userUpdated = e.update(e.User, (u) => ({
          set: {
            salt,
            reset_password_token: null,
            password: hash,
            reset_password_sent_at: null,
            status: user.status === "pending" ? "active" : user.status,
          },
          filter_single: e.op(u.id, "?=", e.uuid(user?.id || "")),
        }));
        return userUpdated.run(tx);
      });

      return res;
    }),
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
        role: z.string(),
        tenant: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const password_reset_token = crypto.randomBytes(20).toString("hex");

      const res = await e
        .insert(e.User, {
          name: input.name,
          email: input.email,
          user_role: e.select(e.UserRole, (role) => ({
            id: true,
            filter_single: e.op(role.id, "=", e.uuid(input.role)),
          })),
          tenant: e.select(e.Tenant, (tenant) => ({
            id: true,
            filter_single: e.op(tenant.id, "=", e.uuid(input.tenant)),
          })),
          reset_password_token: password_reset_token,
          reset_password_sent_at: new Date(),
        })
        .run(ctx.edge);

      let info = await (
        await createMailer()
      ).sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: input.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);

      return res;
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
