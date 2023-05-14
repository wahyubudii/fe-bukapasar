import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { getSession, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="text-center">
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  );
}

// GUEST
const Guest = () => {
  return (
    <main className="container mx-auto text-gray-20 py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>
      <div className="flex justify-center">
        <Link
          href={"/coba/login"}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
};

// AUTHORIZE USER
const User = ({ session, handleSignOut }: any) => {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>
      <div className="">
        <h5>{session?.user.name}</h5>
        <h5>{session?.user.email}</h5>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className="mt-5 px-10 py-1 rounded-sm bg-gray-50"
        >
          Sign Out
        </button>
      </div>
      <div className="flex justify-center">
        <Link
          href={"/profile"}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50"
        >
          Profile Page
        </Link>
      </div>
    </main>
  );
};

// export const getServerSideProps = async ({ req }: any) => {
//   const session = await getSession({ req });

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/coba/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// };
