import { createSlice } from "@reduxjs/toolkit";


const faveSlice = createSlice({
    name:'fave',
    initialState:{faveMovies:[]},
    reducers:{
        addToFave(state, actions){
            const idx = state.faveMovies.findIndex(item=>item.id === actions.payload.id);
            if(idx === -1){
                state.faveMovies.push(actions.payload);
            }
        },
        removeFave(state, action){
            state.faveMovies = state.faveMovies.filter(item=>item.id !== action.payload);
        }
    }
});
export default faveSlice;

export const faveMoviesAction = faveSlice.actions;