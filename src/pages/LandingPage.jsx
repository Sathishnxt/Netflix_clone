import React from "react";
import logo from "../source/Netflix_Logo.png";
import { MdLanguage } from "react-icons/md";
import GetStarted from "../component/GetStarted";
import LandingPageContent from "../component/LandingPageContent";
import tv1 from "../source/tv.png";
import tv2 from "../source/tvImg2.png";
import strangeThings from "../source/strangeThings.jpg";
import children from "../source/children.png";
import video1 from "../source/tvVideo1.m4v";
import video2 from "../source/tvVideo2.m4v";
import FrequentlyAskedQuestion from "../component/FrequentlyAskedQuestion";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="inPage bg-customBackground flex flex-col gap-2">
      <div className="banner-image w-screen h-[93vh] bg-[url('././source/banner.jpg')] bg-cover">
        <div className="banner-background bg-black bg-opacity-40 bg-gradient-to-t from-black via-transparent to-black h-full">
          <div className="nav flex h-[86px] justify-between items-center mx-8">
            <div className="nav-logo">
              <img
                src={logo}
                alt="logo"
                className="w-[150px] h-10 object-cover"
              />
            </div>
            <div className="nav-button flex">
              <div className="language hidden md:flex w-32 h-8 m-2 justify-center items-center border border-gray-500 rounded-md bg-black bg-opacity-50">
                <MdLanguage />
                <select
                  name=""
                  id=""
                  className="bg-transparent outline-none"
                  defaultValue={"english"}
                >
                  <option value="english">English</option>
                  <option value="hindi">हिन्दी</option>
                </select>
              </div>
              <button
                className="bg-redButton w-20 h-8 m-2 rounded"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="banner-body h-[35rem] mx-[9%] flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
              Unlimited movies, TV shows, and more
            </h1>
            <h2 className="text-lg font-normal lg:text-2xl mt-4">
              Watch anywhere, Cancel anywhere.
            </h2>
            <GetStarted />
          </div>
        </div>
      </div>
      <div className="landingPage-content-container flex flex-col gap-2">
        <LandingPageContent
          heading={"Enjoy on your TV"}
          content={
            "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          }
          img={tv1}
          video={video1}
        />
        <LandingPageContent
          heading={"Download your shows to watch offline"}
          content={
            "Save your favorites easily and always have something to watch."
          }
          img={strangeThings}
          flexDirection={"flex-row-reverse"}
        />
        <LandingPageContent
          heading={"Watch everywhere"}
          content={
            "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          }
          img={tv2}
          video={video2}
          fix={true}
        />
        <LandingPageContent
          heading={"Create profiles for kids"}
          content={
            "Send children on adventures with their favorite characters in a space made just for them—free with your membership."
          }
          img={children}
          flexDirection={"flex-row-reverse"}
        />
      </div>
      <div className="FrequentlyAskedQuestions-container bg-black flex flex-col items-center py-[72px] gap-7">
        <h2 className="text-3xl font-bold lg:text-5xl lg:font-black text-center ">
          Frequently Asked Questions
        </h2>
        <div className="FrequentlyAskedQuestions w-full flex flex-col justify-center items-center gap-2">
          <FrequentlyAskedQuestion
            question={"What is Netflix?"}
            answer={`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`}
          />
          <FrequentlyAskedQuestion
            question={"How much does Netflix cost?"}
            answer={
              "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 649 to ₹ 149 a month. No extra costs, no contracts."
            }
          />
          <FrequentlyAskedQuestion
            question={"Where can I watch?"}
            answer={`Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`}
          />
          <FrequentlyAskedQuestion
            question={"How do I cancel?"}
            answer={`Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`}
          />
          <FrequentlyAskedQuestion
            question={"What can I watch on Netflix?"}
            answer={`Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`}
          />
          <FrequentlyAskedQuestion
            question={"Is Netflix good for kids?"}
            answer={`The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`}
          />
        </div>
        <div className="getStarted">
          <GetStarted />
        </div>
      </div>
      <div className="footer bg-black lg:h-[430px] p-2 lg:py-[60px] lg:px-[160px] gap-2 text-[rgba(255,255,255,0.7)]">
        <Footer />
      </div>
      <h2 className="text-center pb-2 text-lg">
        For Educational Purposes Only
      </h2>
    </div>
  );
};

export default LandingPage;
