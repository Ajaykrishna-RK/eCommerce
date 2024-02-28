import { Route, Routes } from "react-router-dom";
import "./App.css";
import SelerHome from "./pages/SellerHome/SelerHome";
import Header from "./components/header/Header";
import SellerAuth from "./pages/Sellerauth/SellerAuth";
import AddProduct from "./pages/addProduct/AddProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/seller" element={<SelerHome />} />
        <Route path="/seller/auth" element={<SellerAuth />} />
        <Route path="/seller/addProduct" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
