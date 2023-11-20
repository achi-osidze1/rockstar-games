import SignInSpinner from "@/components/spinner/SignInSpinner";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SignInPage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/')
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <>
      <Head>
        <title>Sign In | Rockstar Games</title>
        <meta name="description" content="SigninPage" />
      </Head>

      <div
        className="flex min-h-screen flex-1 flex-col justify-center px-6 mt-12 py-12 lg:px-8"
        style={{
          backgroundImage: "url('https://s.rsg.sc/auth/images/bg-repeat.png')",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-[80%]"
            src="https://s.rsg.sc/auth/images/sc_logo_20180910.svg"
            alt=""
          />
        </div>
        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-lg bg-white rounded">
          <form
            className="space-y-6 p-4"
            action=""
            method="POST"
            onSubmit={handleSubmit}
          >
            {loading ? (
              <SignInSpinner />
            ) : (
              <>
                <h2 className="mt-5 text-2xl font-bold text-gray-800">
                  Sign in with social club
                </h2>
                <div>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Email"
                      className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition ease-in-out delay-10"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      placeholder="Password"
                      className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition ease-in-out delay-10"
                    />
                  </div>
                  <div className="flex items-center mt-2">
                    <input type="checkbox" value="" className="w-4 h-4" />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Keep me signed in
                    </label>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-sm">
                      <h1 className="font-normal underline cursor-pointer hover:text-gray-700 transition ease-in-out delay-10">
                        Forgot Your password?
                      </h1>
                    </div>
                    <button
                      type="submit"
                      className="flex justify-center rounded bg-[#fcaf17] px-5 py-1.5 hover:bg-[#ffbd38] whitespace-nowrap transition ease-in-out delay-10"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
        {!loading && (
          <>
            <div className="my-5 sm:mx-auto sm:w-full sm:max-w-lg bg-white rounded">
              <div className="flex justify-between items-center p-4">
                <h1>Sign in using</h1>
                <div className="flex">
                  <img
                    src="https://www.svgrepo.com/show/331538/playstation.svg"
                    alt=""
                    className="w-[50px] md:w-[60px] object-cover cursor-pointer"
                  />
                  <img
                    src="https://www.svgrepo.com/show/452137/xbox.svg"
                    alt=""
                    className="w-[50px] md:w-[60px] object-cover cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="my-5 sm:mx-auto sm:w-full sm:max-w-lg">
              <div className="flex justify-center items-center gap-x-2">
                <h1 className="text-white">Not a member?</h1>
                <h1 className="text-[#fcaf17] cursor-pointer hover:text-[#ffbd38] transition ease-in-out delay-10">
                  Create a new account
                </h1>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SignInPage;
