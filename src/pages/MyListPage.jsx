import React from "react";
import Navbar from "../components/Navbar";
import RowMovies from "../components/RowMovies";
import { useNetflixContext } from "../context/Context";

const MyListPage = () => {
  const { fav } = useNetflixContext();

  return (
    <div className="relative">
      <Navbar />
      <div className="absolute top-24 left-7 right-7 p-2">
        <h2 className="text-4xl font-semibold ml-3 mb-11">My List</h2>
        <RowMovies movies={fav} />
      </div>
    </div>
  );
};

export default MyListPage;
