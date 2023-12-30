import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const Projects = () => {
  const [data, setData] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const getApi = async () => {
    try {
      const response = await axios.get(
        "https://portfoliobackend-production-36e6.up.railway.app/project"
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
        {data.map((project) => (
          <div className="card lg:w-80 w-64 glass mt-6 mx-4 shadow-lg mb-3">
            <figure>
              <img src={project.image} alt="Project" />
            </figure>
            <div className="card-body ">
              <div className=" flex flex-row justify-between gap-3">
                <a href={project.url} target="_blank">
                  <h2 className="card-title font-bold">{project.title} </h2>
                </a>
                <p>{project.startDate.slice(5,10)} - {project.endDate.slice(5,10)}</p>
              </div>
              <p>
                {showFullDescription
                  ? project.description
                  : `${project.description.slice(0, 80)}...`}
                <button
                  className="btn btn-ghost underline"
                  onClick={toggleDescription}
                >
                  {showFullDescription ? "Read Less" : "Read More"}
                </button>
              </p>

              <p className="font-semibold">
                {project.skills.map((skills) => (
                  <span> {skills} </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
