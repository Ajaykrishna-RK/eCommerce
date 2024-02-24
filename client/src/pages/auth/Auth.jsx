import React, { useState } from "react";
import { BASEURL } from "../../constants/Constants";
import axios from "axios";

function Auth() {
  const [authState, setAuthState] = useState(false);
  const [signupCred, setSignUpCred] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignUpCred((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      let config = {
        url: `${BASEURL}/auth/signup`,
        method: "post",
        data: signupCred,
      };

      const response = await axios(config);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-[900px] mx-auto">
      {authState ? (
        <div className="w-[85%] sm:w-[60%] mx-auto">
          <p className="text-center text-[20px] font-[700] py-4"> Sign up </p>
          <form onSubmit={handleSignUp}>
            <input
              className=" bg-gray-100 border-[1px] border-opacity-10 rounded-[10px] border-[#111] w-full py-2 px-3  focus:outline-none "
              type="text"
              value={signupCred.name}
              onChange={(e) => handleChange(e)}
              name="name"
              placeholder="Username"
            />
            <input
              className="mt-4 bg-gray-100 border-[1px] border-opacity-10 rounded-[10px] border-[#111] w-full py-2 px-3  focus:outline-none "
              type="email"
              onChange={(e) => handleChange(e)}
              name="email"
              value={signupCred.email}
              placeholder="email"
            />

            <input
              className="mt-4 bg-gray-100 border-[1px] border-opacity-10 rounded-[10px] border-[#111] w-full py-2 px-3  focus:outline-none "
              type="password"
              name="password"
              value={signupCred.password}
              onChange={(e) => handleChange(e)}
              placeholder="password"
            />

            <button className="bg-[#5555d2] rounded-[10px] font-[700] text-[#fff] w-full mt-4 py-2 ">
              {" "}
              Sign Up{" "}
            </button>
          </form>
          <p
            onClick={() => setAuthState(!authState)}
            className="underline text-end mt-2 cursor-pointer  text-[blue]"
          >
            {" "}
            Already have an account?Login{" "}
          </p>
        </div>
      ) : (
        <div className="w-[85%] sm:w-[60%] mx-auto">
          <p className="text-center text-[20px] font-[700] py-4"> Login </p>
          <form>
            <input
              className="mt-4 bg-gray-100 border-[1px] border-opacity-10 rounded-[10px] border-[#111] w-full py-2 px-3  focus:outline-none "
              type="email"
              name=""
              placeholder="email"
            />

            <input
              className="mt-4 bg-gray-100 border-[1px] border-opacity-10 rounded-[10px] border-[#111] w-full py-2 px-3  focus:outline-none "
              id="username"
              type="password"
              placeholder="password"
            />

            <button className="bg-[#5555d2] rounded-[10px] font-[700] text-[#fff] w-full mt-4 py-2 ">
              {" "}
              Sign Up{" "}
            </button>
          </form>
          <p
            onClick={() => setAuthState(!authState)}
            className="underline text-end mt-2 cursor-pointer  text-[blue]"
          >
            {" "}
            Dont have an account?signup{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default Auth;
