import React, { useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useAuthContext } from "../context/AuthContextProvider";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNetflixContext } from "../context/Context";

const baseUrl = "https://image.tmdb.org/t/p/w500";

const RowMovies = ({ originals, movies, home, id }) => {
  const { fav, setFav } = useNetflixContext();
  const { user } = useAuthContext();
  const docRef = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setFav(doc.data()?.favMovies);
    });
  }, []);

  const addFavMovies = async (movie) => {
    await updateDoc(docRef, {
      favMovies: arrayUnion({
        id: movie.id,
        title: movie?.name || movie.title,
        backdrop_path: movie?.backdrop_path,
      }),
    });
  };

  const removeFavMovies = async (movie) => {
    try {
      const result = fav.filter((item) => item.id !== movie.id);
      await updateDoc(docRef, { favMovies: result });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      id={"slider" + id}
      className={
        home || originals
          ? "overflow-x-auto mx-7 flex gap-2 p-2 scroll-smooth"
          : "grid md:grid-cols-[repeat(auto-fit,minmax(286px,1fr))] gap-2"
      }
    >
      {movies?.map((movie) => (
        <div
          className={`${
            originals
              ? "w-44 h-64"
              : home
              ? "w-[286px] h-[161px]"
              : "min-h-[161px]"
          } flex-shrink-0 relative bg-customBackground overflow-hidden rounded-md transition-transform duration-300 hover:scale-105 `}
          key={movie?.id}
        >
          <img
            className="w-full h-full object-cover"
            src={`${baseUrl}${
              originals ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.title || movie?.name}
            loading="lazy"
          />
          <div className="movie-description absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/50 hover:opacity-100 flex flex-col justify-end p-3">
            <span className="w-full h-4 flex justify-end">
              {fav?.some((favMovie) => favMovie.id === movie.id) ? (
                <AiFillHeart
                  className="text-red-600 cursor-pointer"
                  onClick={() => removeFavMovies(movie)}
                />
              ) : (
                <AiOutlineHeart
                  className="cursor-pointer"
                  onClick={() => addFavMovies(movie)}
                />
              )}
            </span>
            <h3 className="movie-title text-base font-semibold grid place-content-center">
              {movie?.title || movie?.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RowMovies;
