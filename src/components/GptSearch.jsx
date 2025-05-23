import React from "react";
import GptSearchPage from "./GptSearchPage";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMG } from "@/utils/Constants";

const GptSearch = () => {
  return (
    <>
      <img
        src={BACKGROUND_IMG}
        className="absolute top-0 left-0 w-[100vw] h-[100vh] object-cover  sm:block -z-10"
        alt="Background"
      />

      <GptSearchBar />
      <GptSearchPage />
    </>
  );
};

export default GptSearch;
