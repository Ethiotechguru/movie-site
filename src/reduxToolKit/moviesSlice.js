import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{kidsMovies:[],popularMovies:[],dramaMovies:[]},
    reducers:{
        replaceMovies(state, action){
            state.kidsMovies = action.payload.kidsMovies || [];
            state.popularMovies = action.payload.popularMovies||[];
            state.dramaMovies = action.payload.dramaMovies||[];
        }
    }
});

export default moviesSlice;;
export const moviesActions = moviesSlice.actions;