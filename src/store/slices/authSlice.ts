import IUser from "@/models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
	user: IUser;
}

const initialState: AuthState = {
	user: {
		id: 321,
		isApproved: true,
		login: "@elonmusk",
		name: "Elon Musk",
		imageURL: "https://i0.wp.com/www.entrepreneurs.ng/wp-content/uploads/2019/06/Elon-Musk-6.jpg?fit=940%2C529&ssl=1",
		lastVisitDateTime: "2022-06-27T08:50:25Z",
		link: "https://i0.wp.com/www.entrepreneurs.ng/wp-content/uploads/2019/06/Elon-Musk-6.jpg?fit=940%2C529&ssl=1",
		description: "Mars & Cars, Chips & Dips",
	},
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
});

export default authSlice.reducer;
