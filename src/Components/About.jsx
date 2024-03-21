import React from "react";
import { useState, useEffect } from "react";
import comp from "../assets/into.jpeg";
import cap from "../assets/cap.jpeg";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { useParams } from "react-router-dom";

const About = () => {
  const [activeSection, setActiveSection] = useState("about");
  const { id } = useParams();
  const handleToggle = (section) => {
    setActiveSection(section);
  };
  // const [user, setUser] = useState({});
  // const [error, setError] = useState("");
  // const getProfile = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://minimal-resume-backend-1.onrender.com/profile/${id}`
  //     );
  //     console.log(response.data);
  //     setUser(response.data.profile);
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setError(error.response.data.error || "Login failed");
  //   }
  // };
  // useEffect(() => {
  //   getProfile();
  // }, []);

  return (
    <div className="w-full mt-28 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 mx-12">
        <div className="flex flex-col card mt-4">
          <button
            className={`mx-12 card shadow-lg btn btn-ghost h-20 flex flex-row justify-around ${
              activeSection === "about" ? "bg-slate-300 " : ""
            }`}
            onClick={() => handleToggle("about")}
          >
            Overview
            <h3 className="text-xl text-[#d8874a] hidden lg:block">
              Education
            </h3>
          </button>
          <button
            className={`mx-12 card shadow-lg btn btn-ghost h-20 flex flex-row justify-around mt-12 ${
              activeSection === "capabilities" ? "bg-slate-300" : ""
            }`}
            onClick={() => handleToggle("capabilities")}
          >
            <h2 className=" text-2xl font-mono font-bold">education</h2>
            <h3 className="text-xl text-[#d8874a] hidden lg:block"></h3>
          </button>
        </div>
        <div className="mt-5 ml-4">
          <h2 className="text-4xl text-[#d8874a] font-mono font-bold">
            {activeSection === "about" ? "About Me" : "Capabilities"}
          </h2>
          <div className="mt-5 text-slate-700 font-mono font-bold text-lg">
            {activeSection === "about" ? (
              <p className="about">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, soluta neque veritatis tempore illum maxime vel?
                Quasi, nemo eligendi, ipsum ea enim dolores eaque dicta, non
                illo quia beatae minima eius amet.
              </p>
            ) : (
              <p className="capabilities">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                aliquid excepturi dolores modi esse iure facere dolorem vel ea
                numquam laudantium nostrum ad molestias enim, placeat
                repellendus. Eos ipsa labore atque iure!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
