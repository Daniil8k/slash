import IPost from "@/models/IPost";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
	posts: IPost[];
	isLoading: boolean;
	error: string;
	count: number;
}

const initialState: PostState = {
	posts: [],
	isLoading: false,
	error: "",
	count: 0,
};

export const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		add(state, action: PayloadAction<number>) {
			state.count += action.payload;
		},
	},
});

export default postSlice.reducer;
