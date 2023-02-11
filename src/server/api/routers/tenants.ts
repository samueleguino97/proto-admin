import { z } from "zod";
import crypto from "crypto";
import e from "../../../../dbschema/edgeql-js";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const tenantsRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        address: z.string(),
        city: z.string(),
        country: z.string(),
        admin: z.object({ email: z.string().email(), name: z.string() }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const successRes = await ctx.edge.transaction(async (tx) => {
        const tenantCreated = e.insert(e.Tenant, {
          name: input.name,
          address: input.address,
          city: input.city,
          country: input.country,
        });
        const { id } = await tenantCreated.run(tx);
        const password = crypto.randomBytes(16).toString("hex");
        const salt = crypto.randomBytes(16).toString("hex");
        const hash = crypto
          .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
          .toString(`hex`);
        const tenant = e.select(e.Tenant, (tenant) => ({
          id: true,
          filter_single: e.op(tenant.id, "=", e.uuid(id)),
        }));
        const adminCreated = e.insert(e.User, {
          email: input.admin.email,
          name: input.admin.name,
          password: hash,
          salt,
          status: "active",
          user_role: e.insert(e.UserRole, {
            name: "admin",
            tenant,
            description: "The admin role",
          }),
          tenant,
        });
        await adminCreated.run(tx);
        return password;
      });

      return successRes;
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    // return ctx.edge.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
