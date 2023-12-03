import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const Projects = () => {
  const [data, setData] = useState([]);
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
      breakpoint: { max: 1024, min: 464 },
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
        <h1 className="text-[#d8874a]  text-4xl font-bold mb-3 ">My Latest Works</h1>
        <p className="   text-slate-700 text-xl mt-3">Made with Perfection</p>
      </div>
      <Carousel responsive={responsive}>
        {data.map((project) => (
          <div className="card w-80 glass mt-6 mx-4 shadow-lg mb-3">
            <figure>
              <img src={project.image} alt="Project" />
            </figure>
            <div className="card-body">
                <a href={project.url}>
              <h2 className="card-title font-bold">{project.title} </h2></a>
              <p>{project.description}</p>
              <p>
                {project.startDate.slice(0, 10)} - {project.endDate.slice(0, 10)}
              </p>
              <p>{project.skills.map((skills)=>(
                <span>🧐{skills}</span>
              ))}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
