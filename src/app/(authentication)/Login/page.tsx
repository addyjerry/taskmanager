import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex px-5 md:px-20 place-self-center w-full h-screen text-center">
      <div className="bg-primary text-white p-10 justify-center mx-auto py-55 hidden lg:block">
        <p className="text-lg font-bold py-2 max-w-2xl px-8">
          Tusk has completely transformed how we manage tasks! The interface and
          powerful features make collaboration effortless. We have never been
          more organized!
        </p>
        <div className="flex flex-row justify-center py-20">
          <Image src="/avatars/boy.png" width={50} height={50} alt="john" />
          <span className="text-left">
            <h2>John Doe</h2>
            <p>Product manager,XYZ Group</p>
          </span>
        </div>
      </div>
      <div className="justify-center mx-auto py-5">
        <span className="pt-5 pb-10 justify-center">
          <Image
            src="/logos/logo3.png"
            width={300}
            height={300}
            alt="logo"
            className="justify-self-center "
          />
          <h2 className="uppercase font-bold text-center ">
            simplify, organize ,achieve
          </h2>
        </span>
        <div className="py-10 text-lg flex flex-col gap-3">
          <h1 className="font-bold text-3xl">Log In</h1>
          <p>Welcome back to Tusk ! Stay on Track, Stay Active!</p>
          <form className="border-b-1  flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email"
              className="p-2 w-full border"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 w-full border"
            />
            <button className="bg-primary text-white p-3">Log in</button>
          </form>
          <div className="flex flex-col gap-5 py-3">
            <button className="p-3 border-1 flex gap-2 justify-center">
              <Image
                src="/logos/google.png"
                width={100}
                height={100}
                alt="logo"
                className="w-8"
              />
              Log in with Google
            </button>
            <button className="p-3 border-1 flex gap-2 justify-center">
              <Image
                src="/photos/facebook.png"
                width={100}
                height={100}
                alt="logo"
                className="w-8"
              />
              Log in with Facebook
            </button>
            <button className="p-3 border-1 flex gap-2 justify-center">
              {" "}
              <Image
                src="/logos/apple.png"
                width={100}
                height={100}
                alt="logo"
                className="w-8"
              />
              Log in with Apple
            </button>
          </div>
          <p>
            Do not have password? <Link href="/SignUp">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
