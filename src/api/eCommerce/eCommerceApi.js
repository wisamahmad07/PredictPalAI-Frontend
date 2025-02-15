import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../axiosBaseQuery";

export const eCommerceApi = createApi({
  reducerPath: "eCommerceApi",
  baseQuery: axiosBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  tagTypes: ["eCommerce"],
  endpoints: (builder) => ({
    getProductCategories: builder.query({
      query: ({ keyword, limit }) => {
        const params = new URLSearchParams();

        if (keyword) params.append("keyword", keyword);
        if (limit) params.append("limit", limit);

        return {
          url: `/ecommerce/product-categories?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: [{ type: "eCommerce" }],
    }),
    getProductSizes: builder.query({
      query: () => ({
        url: "/ecommerce/product-sizes",
        method: "GET",
      }),
      providesTags: (result, error) => [{ type: "eCommerce" }],
    }),
    getProductColors: builder.query({
      query: () => ({
        url: "/ecommerce/product-colors",
        method: "GET",
      }),
      providesTags: (result, error) => [{ type: "eCommerce" }],
    }),
    getProducts: builder.query({
      query: ({
        keyword,
        page,
        length,
        sizes,
        colors,
        brands,
        categories,
        priceRange,
      }) => {
        const params = new URLSearchParams();

        if (keyword) params.append("keyword", keyword);
        if (page) params.append("page", page);
        if (length) params.append("length", length);
        if (sizes) params.append("sizes", sizes.join(","));
        if (colors) params.append("colors", colors.join(","));
        if (brands) params.append("brands", brands.join(","));
        if (categories) params.append("categories", categories.join(","));
        if (priceRange) params.append("priceRange", priceRange.join(","));

        return {
          url: `/ecommerce/products?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: (result, error) => [{ type: "eCommerce" }],
    }),
    getPopularProducts: builder.query({
      query: ({ num }) => {
        const params = new URLSearchParams();
        if (num) params.append("num", num);

        return {
          url: `/ecommerce/products/popular?${params.toString()}`,
          method: "GET",
        };
      },
    }),
    getProductByID: builder.query({
      query: (id) => ({
        url: `/ecommerce/products/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "eCommerce", id }],
    }),
    createProductReview: builder.mutation({
      query: (reviewData) => ({
        url: "/ecommerce/products/review",
        method: "POST",
        data: reviewData,
      }),
      providesTags: (result, error, id) => [{ type: "eCommerce", id }],
    }),
    changeProductReviewReaction: builder.mutation({
      query: (reactionData) => ({
        url: "/ecommerce/products/review/reaction",
        method: "POST",
        data: reactionData,
      }),
      providesTags: (result, error) => [{ type: "eCommerce" }],
    }),
    getAllOrdersByUser: builder.query({
      query: (userId) => ({
        url: `/ecommerce/orders?userId=${userId}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "eCommerce", id }],
    }),
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/ecommerce/orders/create",
        method: "POST",
        data: orderData,
      }),
      providesTags: (result, error, id) => [{ type: "eCommerce", id }],
    }),
    updateOrder: builder.mutation({
      query: ({ OrderID, ...orderData }) => ({
        url: `/ecommerce/orders/update/${OrderID}`,
        method: "POST",
        data: orderData,
      }),
      providesTags: (result, error, id) => [{ type: "eCommerce", id }],
    }),
  }),
});

export const {
  useGetProductCategoriesQuery,
  useGetProductSizesQuery,
  useGetProductColorsQuery,
  useGetProductsQuery,
  useGetPopularProductsQuery,
  useGetProductByIDQuery,
  useCreateProductReviewMutation,
  useChangeProductReviewReactionMutation,
  useGetAllOrdersByUserQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
} = eCommerceApi;
