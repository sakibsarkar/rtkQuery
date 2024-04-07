import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    // ** get all products----
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),

    // ** delete a product ----
    deleteProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "DELETE",
        body: product,
      }),
      invalidatesTags: ["products"],
    }),

    // ** update a product ----
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "PATCH",
        body: product,
      }),
      invalidatesTags: ["products"],
    }),

    // ** add a new product
    addProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useAddProductMutation,
} = apiSlice;
