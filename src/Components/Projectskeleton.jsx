import React from "react";
import Carousel from "react-multi-carousel";
const Projectskeleton = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 991, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className=" mx-8 mt-28 text-slate-700 font-mono">
      <div className=" flex lg:flex-row flex-col justify-between">
        <h1 className="text-[#d8874a]  text-4xl font-bold mb-3 ">
          My Latest Works
        </h1>
        <p className="   text-slate-700 text-xl mt-3">Made with Perfection</p>
      </div>
      <Carousel responsive={responsive}>
        <div className="skeleton lg:w-80 w-64 glass mt-6 mx-4 shadow-lg mb-3">
          <figure className=" bg-slate-300">
            <div className=" skeleton bg-slate-300"></div>
          </figure>
          <div className=" skeleton card-body h-[360px]">
            <div className=" flex flex-row justify-between gap-3"></div>
          </div>
        </div>
        <div className="skeleton lg:w-80 w-64 glass mt-6 mx-4 shadow-lg mb-3">
          <figure className=" bg-slate-300 animate-bounce">
            <div className=" skeleton bg-slate-300"></div>
          </figure>
          <div className=" skeleton card-body h-[360px]">
            <div className=" flex flex-row justify-between gap-3"></div>
          </div>
        </div>
        <div className="skeleton lg:w-80 w-64 glass mt-6 mx-4 shadow-lg mb-3">
          <figure className=" bg-slate-300">
            <div className=" skeleton bg-slate-300"></div>
          </figure>
          <div className=" skeleton card-body h-[360px]">
            <div className=" flex flex-row justify-between gap-3"></div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Projectskeleton;
