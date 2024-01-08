import React from "react";

const Workskeleton = () => {
  return (
    <div className=" font-mono bg-slate-100 mt-28 shadow-lg ">
      <h1 className=" my-3 text-center text-3xl font-bold text-[#d8874a] ">
        My Experties
      </h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-8 text-slate-700 ">
        <li className="timeline-start  ">
          <div className="timeline-middle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start skeleton lg:h-72 lg:w-[550px] w-[200px] h-80">
            <time className="font-mono italic"></time>
            <span>  </span>
            <time className="font-mono italic skeleton">
             
            </time>
            <div className="text-lg font-black skeleton"></div>
          </div>
          <hr />
        </li>
        <li className="timeline-end ">
          <div className="timeline-middle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:text-end mb-10 skeleton">
            <time className="font-mono italic"></time>
            <span>  </span>
            <time className="font-mono italic"></time>
            <div className="text-lg font-black skeleton lg:h-72 lg:w-[550px] w-[200px] h-80"></div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Workskeleton;
