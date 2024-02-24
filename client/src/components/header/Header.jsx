import React from "react";

function Header() {
  return (
    <div className="bg-[#fff] lg:px-10 px-5 sticky top-0 w-[100%] h-[80px] justify-between flex items-center">
      <div className="">
        <p className="text-[20px] font-[700] text-[#111]"> LOGOSTORE </p>
      </div>
      <div>
        <button> Login/signup </button>
      </div>
    </div>
  );
}

export default Header;
