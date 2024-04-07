import React from "react";
import { useDeleteProductMutation } from "../../redux/api/apiSlice";

const ProductCard = ({ data }) => {
  const { id, title, price, description, category, image, rating } = data || {};
  const [deleteProduct] = useDeleteProductMutation();
  const handleDelete = () => {
    deleteProduct(data);
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="w-full h-[200px]">
        <img src={image} alt="Shoes" className="w-full h-full object-fill" />
      </figure>
      <div className="flex flex-col gap-[10px] p-[20px]">
        <h2 className="card-title">{title.slice(0, 50)}</h2>
        <p>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
