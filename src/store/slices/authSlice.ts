import IUser from "@/models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
	user: IUser;
}

const initialState: AuthState = {
	user: {
		id: 18,
		isApproved: true,
		login: "pbernsh@unicef.org",
		name: "Peirce Berns",
		imageURL: "https://boredhumans.b-cdn.net/faces2/22.jpg",
		lastVisitDateTime: "2022-06-27T08:50:25Z",
		link: "https://boredhumans.b-cdn.net/faces2/22.jpg",
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
	},
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
});

export default authSlice.reducer;
