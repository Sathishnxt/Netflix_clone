import React, { useState } from "react";
import logo from "../source/Netflix_Logo.png";
import Footer from "../components/Footer";
import { useAuthContext } from "../context/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { useNetflixContext } from "../context/Context";
import InputField from "../components/InputField";

const SignUpPage = () => {
  const { email, setEmail, password, SetPassword } = useNetflixContext();
  const { signUp } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <div className="banner-image md:bg-[url('././source/banner.jpg')] bg-cover">
      <div className="banner-background bg-black bg-opacity-10 bg-gradient-to-t from-black via-transparent to-black h-full flex flex-col gap-2">
        <div className="nav flex h-[86px] items-center mx-8">
          <img src={logo} alt="logo" className="w-[150px] h-10 object-cover" />
        </div>
        <div className="signUp-wrapper w-full h-full grid place-content-center">
          <form
            className="signUp-container bg-black bg-opacity-70 flex flex-col gap-6 w-[300px] md:w-[460px] items-center p-16"
            onSubmit={handleSubmit}
          >
            <h2 className="md:w-[314px] h-[42px] text-3xl font-semibold">
              Sign Up
            </h2>
            {error && (
              <p className="p-3 text-red-500 w-[280px] md:w-[314px]">{error}</p>
            )}
            <InputField
              type={"email"}
              value={email}
              setFun={setEmail}
              placeholder={"Email or phone number"}
            />
            <InputField
              type={"password"}
              setFun={SetPassword}
              placeholder={"Add a password"}
            />
            <button
              type="submit"
              className="bg-[rgb(229,9,20)]  w-[280px] md:w-[314px] h-12 text-base font-medium rounded-[4px] mt-4"
            >
              Sign Up
            </button>
            <p className="w-[280px] md:w-[314px] text-[rgb(140,140,140)] mt-10">
              Already subscribed to netflix?
              <Link
                to="/login"
                className="hover:underline text-white ml-1 font-medium"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
        <div className="others w-full h-[430px] bg-black bg-opacity-50 mt-4 hidden md:flex flex-col py-[60px] px-[160px] gap-2 text-[rgba(255,255,255,0.7)]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
