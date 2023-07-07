import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import Navbar from "./Navbar";

const baseUrl = "https://image.tmdb.org/t/p/original";

const BillBoard = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * (response.data.results.length - 1))
          ]
        );
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
    const key = setInterval(() => fetchData(), 10000);
    return () => {
      clearInterval(key);
    };
  }, []);

  const handleDescription = (data, n) => {
    return data?.length > n ? data.substring(0, n) + "..." : data;
  };
  return (
    <div className={`w-screen h-[92vh] relative`}>
      <div className="w-full h-full relative">
        <div className="w-full h-full bg-gradient-to-b from-black opacity-60 absolute"></div>
        <img
          src={`${baseUrl + movie?.backdrop_path}`}
          alt="Poster"
          className=" w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="banner-content p-2 absolute top-1/2 left-6 sm:left-7">
        <h1 className="text-4xl">{movie?.name}</h1>
        <div className="banner-buttons mt-4 flex gap-2">
          <button className="w-32 h-9 border bg-white bg-opacity-80 text-black">
            Play
          </button>
          <button className="w-32 h-9 border">Watch Later</button>
        </div>
        <h2 className="description mt-3 lg:w-[800px] sm:w-[600px]">
          {handleDescription(movie?.overview, 200)}
        </h2>
      </div>
      <Navbar />
    </div>
  );
};

export default BillBoard;
