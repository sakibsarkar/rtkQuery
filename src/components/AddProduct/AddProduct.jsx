import React from "react";
import { useAddProductMutation } from "../../redux/features/api/apiSlice";

const AddProduct = () => {
  const [addProduct] = useAddProductMutation();

  //   add pruduct
  const handleAddProduct = () => {
    const productData = {
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };
    addProduct(productData);
  };

  return (
    <div className="w-full h-full flex justify-center items-center gap-[20px] flex-col">
      <p>This is add product page</p>
      <button className="btn" onClick={handleAddProduct}>
        {" "}
        Add a new product
      </button>
    </div>
  );
};

export default AddProduct;
