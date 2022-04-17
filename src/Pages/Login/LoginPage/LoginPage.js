import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../../Images/headerLogo.png";
const LoginPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen  bg-gray-200">
        <div className="px-8 py-6  text-left rounded-lg bg-zinc-800 shadow-lg">
          <div className="flex justify-center">
            <img src={headerLogo} alt="" />
          </div>
          <h3 className="text-2xl text-yellow-600 font-bold text-center">
            Login to your account
          </h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block text-yellow-600" for="email">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                <span className="text-xs tracking-wide text-red-600">
                  Email field is required{" "}
                </span>
              </div>
              <div className="mt-4">
                <label className="block text-yellow-600">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button className="px-40 py-2 mt-4 text-white bg-yellow-600 rounded-full hover:bg-red-600">
                  Login
                </button>
              </div>
<p className="text-white my-3 ">Don't have an account?<Link to='/register' className="text-blue-600 hover:underline cursor-pointer"> Register </Link></p>
              <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p className="text-center  text-white mx-4 mb-0">OR</p>
          </div>
              <div className="flex  items-baseline justify-between">
                <button className="px-24 py-2 mt-4 text-white hover:bg-yellow-600 rounded-full bg-red-800">
                Continue with Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
