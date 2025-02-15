import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../axiosBaseQuery";

export const communityApi = createApi({
  reducerPath: "communityApi",
  baseQuery: axiosBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  tagTypes: ["community"],
  endpoints: (builder) => ({
    getAllFeeds: builder.query({
      query: ({ offset = 0, limit = 10 }) => ({
        url: `/community/feeds?offset=${offset}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: [{ type: "community" }],
    }),
    createNewFeed: builder.mutation({
      query: ({ data }) => ({
        url: "/community/create-feed",
        method: "POST",
        data,
      }),
      providesTags: [{ type: "community" }],
    }),
    addComment: builder.mutation({
      query: ({ data }) => ({
        url: "/community/add-comment",
        method: "POST",
        data,
      }),
      providesTags: [{ type: "community" }],
    }),
    likeFeed: builder.mutation({
      query: ({ id }) => ({
        url: `/community/like-feed/${id}`,
        method: "POST",
      }),
      providesTags: [{ type: "community" }],
    }),
  }),
});

export const {
  useGetAllFeedsQuery,
  useCreateNewFeedMutation,
  useAddCommentMutation,
  useLikeFeedMutation,
} = communityApi;
