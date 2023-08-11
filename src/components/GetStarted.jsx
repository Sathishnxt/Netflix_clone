import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNetflixContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

const GetStarted = () => {
  const { setEmail } = useNetflixContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signUp");
  };
  return (
    <div className="getStart flex flex-col text-center mt-4 w-full p-2">
      <h2 className="text-xl font-normal">
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <form
        onSubmit={handleSubmit}
        className="getStart flex flex-col md:flex-row justify-center items-center gap-2 mt-4"
      >
        <InputField
          type={"email"}
          setFun={setEmail}
          placeholder={"Email address"}
          landingPage
        />
        <button className="getStart-button w-44 h-full p-3 text-2xl font-medium flex justify-center items-center rounded bg-getStartButton">
          Get Started
          <MdKeyboardArrowRight />
        </button>
      </form>
    </div>
  );
};

export default GetStarted;
