import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
//pass: e39158c8128d72c0eed4b3a2107ddbb1
const Home: NextPage = () => {
  const hello = api.tenants.create.useMutation();
  const login = api.users.login.useMutation();
  const { data } = api.users.me.useQuery();
  async function createTenant() {
    const res = await hello.mutateAsync({
      name: "hello",
      country: "world",
      city: "sad",
      address: "asdaddd",
      admin: { name: "asdasd", email: "samueleguino97@gmail.com" },
    });
    console.log(res);
  }

  async function loginTenant() {
    const res = await login.mutateAsync({
      email: "samueleguino97@gmail.com",
      password: "e39158c8128d72c0eed4b3a2107ddbb1",
    });
    console.log(res);
    localStorage.setItem("token", res.token);
  }
  console.log(data);
  return (
    <>
      <div onClick={createTenant}>Create Tenant</div>
      <div onClick={loginTenant}>Login Tenant</div>
    </>
  );
};

export default Home;
