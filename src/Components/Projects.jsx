import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import Projectskeleton from "./Projectskeleton";
import { useParams } from "react-router-dom";

const Projects = () => {
  const [data, setData] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getApi = async () => {
    try {
      const response = await axios.get(
        `https://minimal-resume-backend-1.onrender.com/project/${id}` 
      );
      setData(response.data);
      console.log(response.data)
      setLoading(false);
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
  {
    if (loading) return <Projectskeleton/>;
  }
  return (
    <div className="mx-8 mt-28 text-slate-700 font-mono">
      <div className="flex lg:flex-row flex-col justify-between">
        <h1 className="text-[#d8874a] text-4xl font-bold mb-3 ">
          My Latest Works
        </h1>
        <p className="text-slate-700 text-xl mt-3">Made with Perfection</p>
      </div>
      {loading ? (
        <Projectskeleton />
      ) : (
        <Carousel responsive={responsive}>
          {Array.isArray(data) &&
            data.map((project) => (
              <div
                className="card lg:w-80 w-64 glass mt-6 mx-4 shadow-lg mb-3"
                key={project.id} // Assuming each project has an 'id' property
              >
                <figure>
                  <img src={project.image} alt="Project" />
                </figure>
                <div className="card-body ">
                  <div className="flex flex-row justify-between gap-3">
                    <a href={project.url} target="_blank">
                      <h2 className="card-title font-bold">{project.title}</h2>
                    </a>
                    <p>
                      {project.startDate.slice(5, 10)} -{" "}
                      {project.endDate.slice(5, 10)}
                    </p>
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
                      <span key={skills}> {skills} </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
        </Carousel>
      )}
    </div>
  );
};

export default Projects;
