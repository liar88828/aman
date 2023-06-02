import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/authSlice.js'
import { apiSlice } from "./apiSlice.js";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[ apiSlice.reducerPath ]: apiSlice.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
	.concat(apiSlice.middleware),
	devTools: true
})