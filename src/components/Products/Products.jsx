import React from "react";
import { useGetProductsQuery } from "../../redux/features/api/apiSlice";
import ProductCard from "../../utils/ProductCard/ProductCard";
const Products = () => {
  const { data: products } = useGetProductsQuery();
  return (
    <div>
      All Products
      <div className="productGrid gap-x-[20px] gap-y-[30px]">
        {products?.map((prod) => (
          <ProductCard key={prod.id} data={prod} />
        ))}
      </div>
    </div>
  );
};

export default Products;
