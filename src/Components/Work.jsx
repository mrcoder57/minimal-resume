import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";

const getRandomColor = () => {
  const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFA500", "#800080"]; // Add more colors if needed
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Work = () => {
  const [data, setData] = useState([]);
  const getApi = async () => {
    try {
      const response = await axios.get(
        "https://portfoliobackend-production-36e6.up.railway.app/experience"
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className=" font-mono bg-slate-100 mt-28 shadow-lg ">
      <h1 className=" my-3 text-center text-3xl font-bold text-[#d8874a]">My Experties</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-8 text-slate-700">
        {data.map((exp, index) => (
          <li key={index} className={index % 2 === 0 ? "timeline-start" : "timeline-end"}>
            <div className="timeline-middle">
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
            <div className={index % 2 === 0 ? "timeline-start" : "timeline-end md:text-end mb-10"}>
              <time className="font-mono italic">{exp.startDate.slice(0, 10)}</time>
              <span> - </span>
              <time className="font-mono italic">{exp.endDate.slice(0, 10)}</time>
              <div className="text-lg font-black">{exp.title}</div>
              {exp.description}
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionWrapper(Work,"work");
