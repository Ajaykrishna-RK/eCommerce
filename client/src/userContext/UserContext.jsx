import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [sellerToken, setSellerToken] = useState(
    localStorage.getItem("sellerToken")
      ? localStorage.getItem("sellerToken")
      : ""
  );

  const LogOut = () => {
    localStorage.removeItem("sellerToken");
    setSellerToken("");
  };

  return (
    <UserContext.Provider value={{ sellerToken, setSellerToken, LogOut }}>
      {children}
    </UserContext.Provider>
  );
};
