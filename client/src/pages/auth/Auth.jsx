import React, { useState } from "react";
import { BASEURL } from "../../constants/Constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../redux/ApiSlice";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [authState, setAuthState] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signupCred, setSignUpCred] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignUpCred((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLoginChange = (e) => {
    setLoginCred((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let config = {
        url: `${BASEURL}/auth/signup`,
        method: "post",
        data: signupCred,
      };

      const response = await axios(config);
      if (response.status === 200) {
        setSignUpCred({ name: "", email: "", password: "" });
        setAuthState(false);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      alert(err?.response?.data?.msg);
      setSignUpCred({ name: "", email: "", password: "" });
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let config = {
        url: `${BASEURL}/auth/login`,
        method: "post",
        data: loginCred,
      };
      const response = await axios(config);
      if (response?.status === 200) {
        dispatch(Login(response?.data));
        navigate("/");
        setLoginCred({ email: "", password: "" });
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      alert(err?.response?.data?.msg);
      setLoginCred({ email: "", password: "" });
      setLoading(false);
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
              {loading ? "loading... " : "Signup"}
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
          <form onSubmit={handleLogin}>
            <input
              className="mt-4 bg-gray-100 border-[1px] border-opacity-10 rounded-[10px] border-[#111] w-full py-2 px-3  focus:outline-none "
              type="email"
              name="email"
              value={loginCred.email}
              onChange={(e) => handleLoginChange(e)}
              placeholder="email"
            />

            <input
              className="mt-4 bg-gray-100 border-[1px] border-opacity-10 rounded-[10px] border-[#111] w-full py-2 px-3  focus:outline-none "
              id="username"
              type="password"
              name="password"
              value={loginCred.password}
              onChange={(e) => handleLoginChange(e)}
              placeholder="password"
            />

            <button className="bg-[#5555d2] rounded-[10px] font-[700] text-[#fff] w-full mt-4 py-2 ">
              {" "}
              {loading ? "loading..." : " Login"}{" "}
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
