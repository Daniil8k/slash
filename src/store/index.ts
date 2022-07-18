import { postAPI } from "@/services/PostService";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import postSlice from "./slices/postSlice";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
	postSlice,
	authSlice,
	[postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = () =>
	configureStore({
		reducer: rootReducer,
		middleware(getDefaultMiddleware) {
			return getDefaultMiddleware().concat(postAPI.middleware);
		},
	});

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState["dispatch"];

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
