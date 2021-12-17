import moviesSlice from "./moviesSlice";
import faveSlice from "./faveSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		kidsMovies: moviesSlice.reducer,
		faveMovies: faveSlice.reducer
	},
});

export default store;