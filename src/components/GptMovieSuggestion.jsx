import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMovieSuggestion = () => {
    const {gptMovies , gptMoviesName } = useSelector((store)=>store.gptMovie)
    if(!gptMoviesName) return;
    console.log(gptMoviesName)
  return (
    <div className='bg-black text-white'>
        <div>
            {gptMoviesName.map((movie , index)=> <MovieList
                key={movie} 
                title={movie}
                Movies={gptMovies[index]}
              />)
            }
        </div>

    </div>
  )
}

export default GptMovieSuggestion