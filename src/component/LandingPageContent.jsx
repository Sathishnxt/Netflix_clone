import React from "react";

const LandingPageContent = ({
  heading,
  content,
  img,
  video,
  flexDirection,
  fix,
}) => {
  return (
    <div
      className={`inPage-contents py-[72px] px-[10%] lg:px-[15%] 2xl:px-[15%] bg-black flex md:${flexDirection} flex-col lg:flex-row`}
    >
      <div className="inPage-content w-full flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-black">{heading}</h2>
        <p className="text-lg md:text-2xl font-normal mt-4 ">{content}</p>
      </div>
      <div className="inPage-image w-full flex flex-col  justify-center relative">
        <img src={img} alt="TV" className="z-10" />
        {video && (
          <video
            src={video}
            className={`${
              fix
                ? "w-[150px] left-[53px] top-[18px] md:w-[370px] md:left-[120px] md:top-[40px] lg:w-[220px] lg:left-[70px] lg:top-[25px] xl:w-[320px] xl:left-[90px] xl:top-[25px] 2xl:w-[330px] 2xl:left-[100px] 2xl:top-[40px]"
                : "w-[185px] left-[35px] top-[40px] md:w-[449px] md:left-[80px] md:top-[95px] lg:w-[260px] lg:left-[49px] lg:top-[57px] xl:w-[365px] xl:left-[67px] xl:top-[78px] 2xl:w-[391px] 2xl:left-[70px] 2xl:top-[84px]"
            } inPage-Video absolute`}
            autoPlay
            loop
            muted
          ></video>
        )}
      </div>
    </div>
  );
};

export default LandingPageContent;
