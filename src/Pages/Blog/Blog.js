import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const Blog = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto ">
            <span className="flex justify-center text-4xl my-3">
              {" "}
              <ImQuotesLeft />
            </span>
            <h1 className="text-4xl my-3">
              {" "}
              Difference between authorization and authentication?
            </h1>

            <div className="leading-relaxed text-lg">
              <p className="text-xl text-red-400">Authentication</p>
              <ul>
                <li>
                  {" "}
                  (1) Authentication is a very first step of security system ,
                  it validates the identity of a user by verifying their
                  credentials.
                </li>
                <li>
                  (2) In the process of authentication , the data moves through
                  ID tokens for maintaining security
                </li>
                <li>
                  (3) Authentication verifies if the user is the same person who
                  they are claiming to be .
                </li>
                <li>
                  (4) Authentication is done before the process of authorization
                </li>
              </ul>
            </div>

            <div className="leading-relaxed text-lg">
              <p className="text-xl text-red-400">Authorization</p>
              <ul>
                <li>
                  {" "}
                  (1) Authorization must follow authorization in a system
                  security environment . It grants or denies the access to
                  different resources , actions or functions .
                </li>
                <li>
                  (2) On the other hand, in the process of authorization ,the
                  data moves through access tokens for maintaining security
                </li>
                <li>
                  (3) Authorization validates the priveleges and permissions
                  granted to the user for accessing the files , resources or for
                  doing an action which they are trying to do .
                </li>
                <li>
                  (4) Authorization is done after the process of authorization .
                </li>
              </ul>
            </div>
          </div>

          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto ">
            <span className="flex justify-center text-4xl my-3">
              {" "}
              <ImQuotesLeft />
            </span>
            <h1 className="text-4xl my-3">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h1>
            <div className="leading-relaxed text-lg">
              <p className="text-xl text-red-400">Firebase </p>

              <p>
                Firebase is a free service that lets users log in with their
                Google account. Firebase is a good choice if you plan to either
                write a brand-new application or rewrite an existing one from
                scratch.That the reasone i use firebase .
              </p>
              <p className="text-xl text-red-400">Other options </p>
              <p>(1) Okta </p>
               <p>(2) Auth </p> 
                <p>(3) Back4App</p>
            </div>


          </div>
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto ">
            <span className="flex justify-center text-4xl my-3">
              {" "}
              <ImQuotesLeft />
            </span>
            <h1 className="text-4xl my-3">
              {" "}
              What other services does firebase provide other than
              authentication?
            </h1>
            <div className="leading-relaxed text-lg">
            <p>1. Storage</p>
             <p>2. Hosting</p> 
             <p>3. Real-time Database</p>
             <p>4. Firebase ML</p> 
            <p>5. Built-In Push Notifications</p> 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
