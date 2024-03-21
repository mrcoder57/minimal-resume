import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { useParams } from "react-router-dom";
import axios from "axios";

const About = () => {
  const [activeSection, setActiveSection] = useState("about");
  const { id } = useParams();
  const handleToggle = (section) => {
    setActiveSection(section);
  };
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  
  const getProfile = async () => {
    try {
      const response = await axios.get(
        `https://minimal-resume-backend-1.onrender.com/profile/${id}`
      );
      setUser(response.data.profile);
    } catch (error) {
      console.error("Error:", error);
      setError(error.response?.data?.error || "An error occurred");
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="w-full mt-28">
      <div className="grid lg:grid-cols-2 grid-cols-1 mx-12">
        <div className="flex flex-col card mt-4">
          <button
            className={`mx-12 card shadow-lg btn btn-ghost h-20 flex flex-row justify-around ${
              activeSection === "about" ? "bg-slate-300 " : ""
            }`}
            onClick={() => handleToggle("about")}
          >
            
            <h3 className="text-xl text-[#d8874a] hidden lg:block">
            Overview
            </h3>
          </button>
          <button
            className={`mx-12 card shadow-lg btn btn-ghost h-20 flex flex-row justify-around mt-12 ${
              activeSection === "capabilities" ? "bg-slate-300" : ""
            }`}
            onClick={() => handleToggle("capabilities")}
          >
            <h2 className=" text-2xl font-mono font-bold">Education</h2>
            <h3 className="text-xl text-[#d8874a] hidden lg:block"></h3>
          </button>
        </div>
        <div className="mt-5 ml-4">
          <h2 className="text-4xl text-[#d8874a] font-mono font-bold">
            {activeSection === "about" ? "About Me" : "Capabilities"}
          </h2>
          <div className="mt-5 text-slate-700 font-mono font-bold text-lg">
            {error ? (
              <p className="error">{error}</p>
            ) : (
              <p className="content">
                {activeSection === "about" ? (
                  <p className="about">
                    {user && user.profiles && user.profiles.overview ? (
                      <p className="mr-6 mt-4 text-xl text-slate-600">
                        {user.profiles.overview}
                      </p>
                    ) : (
                      <p className="mr-6 mt-4 text-xl text-slate-600">
                        Overview not available
                      </p>
                    )}
                  </p>
                ) : (
                  <p className="capabilities">
                    {user && user.profiles && user.profiles.education ? (
                      <p className="mr-6 mt-4 text-xl text-slate-600">
                        {user.education}
                      </p>
                    ) : (
                      <p className="mr-6 mt-4 text-xl text-slate-600">
                        Education not available
                      </p>
                    )}
                  </p>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
