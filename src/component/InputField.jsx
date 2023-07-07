import React from "react";

const InputField = ({ type, value, setFun, placeholder, landingPage }) => {
  return (
    <div
      className={`${type} relative bg-[rgb(51,51,51)] h-[50px] w-[280px] md:w-[314px] rounded-[4px] p-3 ${
        landingPage &&
        "w-[280px] md:w-[360px] h-full bg-black bg-opacity-50 border border-gray-500 rounded p-4"
      }`}
    >
      <input
        type={type}
        id={type}
        className={`${
          landingPage && " "
        } bg-transparent outline-none w-full h-full rounded mt-1 peer`}
        placeholder=" "
        required
        value={value}
        onChange={(e) => setFun(e.target.value)}
      />
      <label
        htmlFor={type}
        className={`absolute w-full h-full p-3 left-0 top-0 text-gray-400 flex items-center -translate-y-4 text-sm  peer-focus:-translate-y-4 peer-focus:text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base transition-transform duration-200`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputField;
