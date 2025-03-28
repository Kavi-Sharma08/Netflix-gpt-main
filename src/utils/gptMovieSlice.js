import { createSlice } from "@reduxjs/toolkit";
const gptMoviesSlice = createSlice({
    name : "gptMovies" , 
    initialState : {
        gptMovies : null,
        gptMoviesName : null
    },
    reducers : {
        addMoviesGpt : (state , action) =>{
            const{moviesName , moviesResults} = action.payload
            state.gptMovies = moviesResults,
            state.gptMoviesName = moviesName
        },
        removeCart : (state)=>{
            state.gptMovies = []
            state.gptMoviesName = []
        }

    }
})
export const {addMoviesGpt , removeCart} = gptMoviesSlice.actions;
export default gptMoviesSlice.reducer;