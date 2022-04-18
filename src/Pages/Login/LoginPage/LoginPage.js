import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import headerLogo from "../../../Images/headerLogo.png";
import Loading from "../../Shared/Loading/Loading";
const LoginPage = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

const submitYourDetails=e=>{
    
const email = e.target.email.value
const password = e.target.password.value
signInWithEmailAndPassword(email,password)

e.preventDefault();

}
if (error) {
  return (
    <div>
      <p>Error: {error.message}</p>
    </div>
  );
}
if(loading){
  return <Loading></Loading>
}
if (user) {
  return (
    <div>
      <p>Signed In User: {user.email}</p>
    </div>
  );
}
// // console.log(user)


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

          <form onSubmit={submitYourDetails}>
            <div className="mt-4">
              <div>
                <label className="block text-yellow-600">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name='email'
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              
              </div>
              <div className="mt-4">
                <label className="block text-yellow-600">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name='password'
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
             <p className='text-rose-600 my-2'>
             {
                error ? error?.message : ''
              }
             </p>
              <div className="flex items-baseline justify-between">
                <button className="px-40 py-2 mt-4 text-white bg-yellow-600 rounded-full hover:bg-red-600">
                  Login
                </button>
              </div>
          
            </div>
          </form>
          <p className="text-white my-3 ">
                Don't have an account?
                <Link
                  to="/register"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  {" "}
                  Register{" "}
                </Link>
              </p>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center  text-white mx-4 mb-0">OR</p>
              </div>
              <div className="flex  items-baseline justify-between">
                <button className="px-24 py-2 mt-4 text-white hover:bg-yellow-600 rounded-full bg-red-800">
                  Continue with Google
                </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
