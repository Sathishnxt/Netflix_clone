import React from "react";
import requests from "../requests";
import BillBoard from "../component/Billboards";
import Rows from "../component/Rows";

const HomePage = () => {
  return (
    <div className=" bg-black w-full h-full relative">
      <div className="billboard">
        <BillBoard />
      </div>
      <Rows
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        originals
      />
      <Rows title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Rows title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Rows title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Rows title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Rows title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Rows title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Rows
        title={"Adventure Movies"}
        fetchUrl={requests.fetchAdventureMovies}
      />
      <Rows title={"War Movies"} fetchUrl={requests.fetchWarMovies} />
      <Rows
        title={"Science Fiction Movies"}
        fetchUrl={requests.fetchScienceFictionMovies}
      />
      <Rows title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomePage;
