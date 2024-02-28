import React, { useState } from "react";

function AddProduct() {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setProductDetails({ ...productDetails, image: e.target.files[0] });
    } else {
      setProductDetails((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productDetails);
  };

  return (
    <div className="max-w-[900px] mx-auto">
      <div className="w-[85%] sm:w-[60%] mx-auto">
        <p className="text-center py-4 text-[24px]">Add Your Product </p>
        <form onSubmit={handleSubmit}>
          <input
            className=" bg-gray-100 border-[1px] border-opacity-10 rounded-[10px] border-[#111] w-full py-2 px-3  focus:outline-none "
            type="text"
            value={productDetails.productName}
            onChange={(e) => handleChange(e)}
            name="productName"
            placeholder="ProductName"
          />
          <input
            className="mt-4 bg-gray-100 border-[1px] border-opacity-10 rounded-[10px] border-[#111] w-full py-2 px-3  focus:outline-none "
            type="text"
            value={productDetails.description}
            onChange={(e) => handleChange(e)}
            name="description"
            placeholder="Description"
          />
          <input
            className="mt-4 bg-gray-100 border-[1px] border-opacity-10 rounded-[10px] border-[#111] w-full py-2 px-3  focus:outline-none "
            type="number"
            value={productDetails.price}
            onChange={(e) => handleChange(e)}
            name="price"
            placeholder="Price"
          />
          <input
            className="mt-4 bg-gray-100 border-[1px] border-opacity-10 rounded-[10px] border-[#111] w-full py-2 px-3  focus:outline-none "
            type="text"
            value={productDetails.category}
            onChange={(e) => handleChange(e)}
            name="category"
            placeholder="Category"
          />
          <input
            className="mt-4"
            type="file"
            onChange={handleChange}
            name="image"
            accept="image/*"
          />
          <button className="bg-[#6868ed] w-full mt-4 text-[#fff] py-2 rounded-[20px]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
