import IPost from "@/models/IPost";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const postAPI = createApi({
	reducerPath: "postAPI",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ["Post"],
	endpoints: (build) => ({
		fetchAllPosts: build.query<IPost[], number>({
			query: (limit: number = 100) => ({
				url: "/posts",
				params: {
					_limit: limit,
				},
			}),
			providesTags: (result) => ["Post"],
		}),
		createPost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: "/posts",
				method: "POST",
				body: post,
			}),
			invalidatesTags: ["Post"],
		}),
		updatePost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: `/posts/${post.id}`,
				method: "PUT",
				body: post,
			}),
			invalidatesTags: ["Post"],
		}),
		deletePost: build.mutation<IPost, number>({
			query: (postId) => ({
				url: `/posts/${postId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Post"],
		}),
	}),
});
