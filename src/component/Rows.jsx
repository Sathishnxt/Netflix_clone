import React, { useEffect, useState } from "react";
import axios from "../axios";
import RowMovies from "./RowMovies";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { v4 as uuid } from "uuid";

const Rows = ({ title, fetchUrl, originals }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${fetchUrl}`);
      setMovies(response.data.results);
    };

    fetchData();
  }, [fetchUrl]);

  const id = uuid();
  const slideLeft = () => {
    const slider = document.getElementById("slider" + id);
    slider.scrollLeft += (window.innerWidth / 100) * 95;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider" + id);
    slider.scrollLeft -= (window.innerWidth / 100) * 95;
  };
  return (
    <>
      <h2 className="text-2xl mx-7 font-bold my-4">{title}</h2>
      <div className="relative group">
        <BiChevronLeft
          className=" absolute z-10 left-0 top-0 h-full text-red-500 hidden group-hover:block cursor-pointer"
          size={40}
          onClick={slideRight}
        />
        <RowMovies
          id={id}
          originals={originals}
          movies={movies}
          home={!originals ? true : ""}
        />
        <BiChevronRight
          className="absolute z-10 right-0 top-0 h-full text-red-500 hidden group-hover:block cursor-pointer"
          size={40}
          onClick={slideLeft}
        />
      </div>
    </>
  );
};

export default Rows;
