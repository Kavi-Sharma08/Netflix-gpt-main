import { addNowPlayingMovies } from "../utils/MovieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    useEffect(() => {
        MovieApi();


    }, [])
    const MovieApi = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
       

    }




}
export default useNowPlayingMovies;
