import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice" 
import movieReducer from "./MovieSlice"
import TopMovieReducer from "./TopRatedMoviesSlice"
import PopularMovieReducer from "./PopularMovieSlice"
import UpcomingMovieReducer from "./UpcomingMovieSlice"
import TVShowsReducer from "./TvShowsSlice"
import gptReducer from "./gptSlice"
import gptMoviesReducer from "./gptMovieSlice"

const appstore = configureStore(
    {
        reducer: {
            user : userReducer,
            movie : movieReducer,
            TopRatedMovie : TopMovieReducer,
            PopularMovie : PopularMovieReducer,
            UpcomingMovie : UpcomingMovieReducer,
            TVShow : TVShowsReducer,
            gpt : gptReducer,
            gptMovie : gptMoviesReducer
            

        }
    }
)

export default appstore