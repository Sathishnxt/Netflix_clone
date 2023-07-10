import React, { useState } from "react";
import logo from "../source/Netflix_Logo.png";
import Footer from "../component/Footer";
import { useAuthContext } from "../context/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { useNetflixContext } from "../context/Context";
import InputField from "../component/InputField";

const LoginPage = () => {
  const { email, setEmail, password, SetPassword } = useNetflixContext();
  const { logIn } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
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
        <div className="login-wrapper w-full h-full grid place-content-center">
          <form
            className="login-container bg-black bg-opacity-70 flex flex-col gap-6 w-[300px] md:w-[460px] h-full md:h-[700px] items-center p-16"
            onSubmit={handleSubmit}
          >
            <h2 className="md:w-[314px] h-[42px] text-3xl font-semibold">
              Sign In
            </h2>
            {error ? (
              <p className="p-3 text-red-500 w-[300px] md:w-[460px]">{error}</p>
            ) : null}
            <InputField
              type={"email"}
              setFun={setEmail}
              placeholder={"Email or phone number"}
            />
            <InputField
              type={"password"}
              setFun={SetPassword}
              placeholder={"Password"}
            />
            <button
              type="submit"
              className="bg-[rgb(229,9,20)] w-[280px] md:w-[314px] h-12 text-base font-medium rounded-[4px] mt-4"
            >
              Sign In
            </button>
            <div className="w-[280px] md:w-[314px] h-5 text-[rgb(179,179,179)] flex justify-between">
              <div>
                <input type="checkbox" id="checkbox" defaultChecked />
                <label htmlFor="checkbox" className="w-[100px]">
                  Remember me
                </label>
              </div>
              <a href="null" className="text-xs hover:underline">
                need help?
              </a>
            </div>
            <p className="w-[280px] md:w-[314px] text-[rgb(140,140,140)] mt-10">
              New to Netflix?
              <Link
                to={"/signUp"}
                className="hover:underline text-white ml-1 font-medium"
              >
                Sign up now
              </Link>
            </p>
            <p className="w-[280px] md:w-[330px] text-[rgb(140,140,140)] ml-2 -mt-3">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <a href="null" className="text-[rgb(0,113,235)] hover:underline">
                Learn more.
              </a>
            </p>
          </form>
        </div>
        <div className="others w-full h-full bg-black bg-opacity-50 mt-4 md:flex flex-col py-[60px] px-[160px] gap-2 text-[rgba(255,255,255,0.7)] hidden ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
