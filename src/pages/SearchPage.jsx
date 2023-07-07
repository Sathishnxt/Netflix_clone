import React, { useEffect, useState } from "react";
import axios from "../axios";
import RowMovies from "../component/RowMovies";
import Navbar from "../component/Navbar";
import { useDebounce } from "@uidotdev/usehooks";
import instance from "../axios";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [title, setTitle] = useState("");
  const debouncedSearchTerm = useDebounce(searchQuery, 500);
  const apiKey = "4a931e65206c6e351e5ce431ac9f68a0";
  const searchMovie = async (query) => {
    try {
      const response = await axios.get(
        `search/movie?api_key=${apiKey}&query=${query}`
      );
      return response.data.results;
    } catch (error) {
      console.error("Error searching for movies", error);
      return [];
    }
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    const results = await searchMovie(searchQuery);
    setMovies(results);
    setIsSearching(false);
  };

  useEffect(() => {
    const onchangeSearch = async () => {
      setIsSearching(true);
      const results = await searchMovie(debouncedSearchTerm);
      setMovies(results);
      setTitle(`Result for ${debouncedSearchTerm}`);
      setIsSearching(false);
    };
    const trendingMovies = async () => {
      const response = await instance.get(
        `/trending/all/week?api_key=${apiKey}&language=en-US`
      );
      setMovies(response.data.results);
      setTitle("Trending Movies");
    };
    if (debouncedSearchTerm === "") {
      trendingMovies();
    } else {
      onchangeSearch();
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="flex flex-col">
      <Navbar />
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center p-2 gap-2 mt-20 mx-7 flex-col md:flex-row"
      >
        <input
          type="search"
          className="bg-black w-[210px] h-9 p-2 outline-none border border-gray-500 rounded"
          placeholder="Search movies"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button className="bg-redButton w-20 h-9 m-2 rounded font-medium">
          {isSearching ? "..." : "search"}
        </button>
      </form>
      <div className="mx-7 mt-7 p-2">
        <h2 className="text-2xl font-medium md:text-4xl md:font-semibold ml-3 mb-11">
          {title}
        </h2>
        <RowMovies movies={movies} />
      </div>
    </div>
  );
};

export default SearchPage;
