import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../redux/ApiSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.api);
  console.log(token ? "hello" : "no");

  return (
    <div className="bg-[#fff] lg:px-10 px-5 sticky top-0 w-[100%] h-[80px] justify-between flex items-center">
      <div className="">
        <p className="text-[20px] font-[700] text-[#111]"> LOGOSTORE </p>
      </div>
      <div>
        {token ? (
          <button onClick={dispatch(LogOut())}> Logout</button>
        ) : (
          <button onClick={() => navigate("/auth")}> Login/signup </button>
        )}
      </div>
    </div>
  );
}

export default Header;
