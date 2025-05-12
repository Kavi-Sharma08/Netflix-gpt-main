import React, { useEffect, useRef } from "react";
import client from "../utils/Openai";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "@/utils/Constants";
import { addMoviesGpt } from "../utils/gptMovieSlice";
import OpenAI from "openai";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchGptMovies = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const searchText = useRef();
  const HandleGpt = async () => {
    const client = new OpenAI({
      baseURL: import.meta.env.VITE_BASE_URL,
      apiKey: import.meta.env.VITE_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    const gptQuery =
      "Act as a movie recommendation guy you want suggest movie  " +
      searchText.current.value +
      "only give name do not add any star just text and give comma separated values";
    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: "" },
        { role: "user", content: gptQuery },
      ],
      model: "openai/gpt-4o",
      temperature: 1,
      max_tokens: 4096,
      top_p: 1,
    });

    const gptMovies = response?.choices[0]?.message?.content?.split(",");
    console.log(gptMovies);
    const data = gptMovies.map((movie) => searchGptMovies(movie)); // return 5 promises

    const dataResults = await Promise.all(data);
    dispatch(
      addMoviesGpt({ moviesName: gptMovies, moviesResults: dataResults })
    );
  };
  return (
    <div className="pt-[10%] w-[80%] items-center">
      <form className="grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="search"
          placeholder="Which movie you want to see"
          className="border-2 p-2 col-span-9 m-2 box-border"
        />
        <button
          className=" text-white  m-2 bg-red-700 col-span-3 "
          onClick={HandleGpt}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
