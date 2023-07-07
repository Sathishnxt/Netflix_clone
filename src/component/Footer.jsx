import React from "react";
import { useNetflixContext } from "../context/Context";
import { MdLanguage } from "react-icons/md";

const Footer = () => {
  const { footerList } = useNetflixContext();
  return (
    <>
      <p className="py-3">
        Questions? Call <a href="hv">000-800-919-1694</a>
      </p>
      <div className="footer-content flex flex-col md:grid place-content-center md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2 p-2">
        {footerList.map((link) => (
          <a key={link} href="h" className="underline text-sm font-normal">
            {link}
          </a>
        ))}
      </div>
      <div className="language w-36 m-2 flex justify-center items-center border border-gray-500 rounded-md bg-black bg-opacity-50 text-white">
        <MdLanguage />
        <select
          name=""
          id=""
          className="bg-transparent h-9"
          defaultValue={"english"}
        >
          <option value="english">English</option>
          <option value="hindi">हिन्दी</option>
        </select>
      </div>
      <p className="p-2">Netflix India</p>
    </>
  );
};

export default Footer;
