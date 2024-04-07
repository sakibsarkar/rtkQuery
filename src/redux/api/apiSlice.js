import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "DELETE",
        body: product,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery, useDeleteProductMutation } = apiSlice;
