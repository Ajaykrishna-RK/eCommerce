import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../redux/ApiSlice";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../userContext/UserContext";

function Header() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sellerToken, LogOut } = useContext(UserContext);

  return (
    <div className="bg-[#fff] lg:px-10 px-5 sticky top-0 w-[100%] h-[80px] justify-between flex items-center">
      <div className="">
        <p
          onClick={() => navigate(`/seller`)}
          className="text-[20px] font-[700] text-[#111]"
        >
          {" "}
          LOGOSTORE{" "}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="">
          <button
            onClick={() => navigate(`/seller/addProduct`)}
            className="text-[18px] px-4 py-1 text-[#fff] rounded-[30px] bg-[blue]"
          >
            {" "}
            Add Product
          </button>
        </div>

        {sellerToken ? (
          <button onClick={() => LogOut()}> Logout</button>
        ) : (
          <button onClick={() => navigate("/seller/auth")}>
            {" "}
            Login/signup{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
