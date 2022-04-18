import React from "react";
import { Link, useNavigate } from "react-router-dom";
import headerLogo from "../../../Images/headerLogo.png";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import Loading from "../../Shared/Loading/Loading";
const Register = () => {
const navigate=useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  const [signInWithGoogle, googlUser, googlLoading, googleError] = useSignInWithGoogle(auth);
    const registerYourDetails=e=>{
    
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirmPassword.value
        createUserWithEmailAndPassword(email,password)
        e.preventDefault();
        navigate("/home");
        }

        const continueWithGoogle=()=>{
          signInWithGoogle()
        }
        
        if(loading ||googlLoading){
          return <Loading></Loading>
        }
        // console.log(user,error)
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen  bg-gray-200">
        <div className="px-8 py-6  text-left rounded-lg bg-zinc-800 shadow-lg">
          <div className="flex justify-center">
            <img src={headerLogo} alt="" />
          </div>
          <h3 className="text-2xl text-yellow-600 font-bold text-center">
            Register your account
          </h3>
          <form onSubmit={registerYourDetails}>
            <div className="mt-4">
              <div>
                <label className="block text-yellow-600">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
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
              <div className="mt-4">
                <label className="block text-yellow-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name='confirmPassword'
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <p className='text-rose-600 my-2'>
              {
                error ? error.message : ''
              }
              {
                googleError ? googleError.message : ''
              }
              </p>
              
              <div className="flex items-baseline justify-between">
                <button className="px-40 py-2 mt-4 text-white bg-yellow-600 rounded-full hover:bg-red-600">
                  Register
                </button>
              </div>
        
            </div>
          </form>
          <p className="text-white my-3 ">
                Already have an account ?
                <Link
                  to="/login"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  {" "}
                  Login{" "}
                </Link>
              </p>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center  text-white mx-4 mb-0">OR</p>
              </div>
              <div className="flex  items-baseline justify-between">
                <button onClick={continueWithGoogle} className="px-28 py-2 mt-4 text-white hover:bg-yellow-600 rounded-full bg-red-800">
                  Continue with Google
                </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
