import React, { createContext, useContext, useState } from "react";

const NetflixContext = createContext(null);

const Context = ({ children }) => {
  const footerList = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];
  const navList = [
    { id: 1, title: "Home", link: "/home" },
    // { id: 2, title: "TV Shows", link: "/tv_shows" },
    // { id: 3, title: "Movies", link: "/movies" },
    // { id: 4, title: "New & Popular", link: "/new&popular" },
    { id: 5, title: "My List", link: "/my_list" },
    // { id: 6, title: "Browse By Languages", link: "/browse_by_languages" },
    { id: 7, title: "Search", link: "/search" },
  ];
  const [fav, setFav] = useState([]);
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  return (
    <NetflixContext.Provider
      value={{
        footerList,
        navList,
        fav,
        setFav,
        email,
        setEmail,
        password,
        SetPassword,
      }}
    >
      {children}
    </NetflixContext.Provider>
  );
};

export default Context;

export const useNetflixContext = () => useContext(NetflixContext);
