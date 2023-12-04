import React from 'react'
import { useState } from 'react';
import comp from "../assets/into.jpeg"
import cap from "../assets/cap.jpeg"
import { SectionWrapper } from '../hoc';

const About = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleToggle = (section) => {
    setActiveSection(section);
  };

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
            <img
              src={comp}
              alt="web"
              height={70}
              width={70}
              className="rounded-full"
            />
            <h3 className="text-xl text-[#d8874a] hidden lg:block">Who am I ?</h3>
          </button>
          <button
            className={`mx-12 card shadow-lg btn btn-ghost h-20 flex flex-row justify-around mt-12 ${
              activeSection === "capabilities" ? "bg-slate-300" : ""
            }`}
            onClick={() => handleToggle("capabilities")}
          >
            <img
              src={cap}
              alt="web"
              height={70}
              width={70}
              className="rounded-full"
            />
            <h3 className="text-xl text-[#d8874a] hidden lg:block">
              What can I do ?
            </h3>
          </button>
        </div>
        <div className="mt-5 ml-4">
          <h2 className="text-4xl text-[#d8874a] font-mono font-bold">
            {activeSection === "about" ? "About Me" : "Capabilities"}
          </h2>
          <div className="mt-5 text-slate-700 font-mono font-bold text-lg">
            {activeSection === "about" ? (
              <p className="about">
                {/* About section content */}
                Hello, I'm Aman Tiwari, a passionate Full Stack Web Developer and
                Software Developer. With a deep-rooted love for coding and
                problem-solving, I embark on the journey of crafting innovative
                digital solutions. My dedication to the world of web development
                is driven by a desire to create seamless and impactful user
                experiences. From frontend aesthetics to backend functionality, I
                specialize in the art of building comprehensive web applications.
                Join me as I navigate through the ever-evolving landscape of
                technology, constantly seeking new challenges and opportunities
                for growth. Let's turn ideas into reality through the language of
                code.
              </p>
            ) : (
              <p className="capabilities">
                {/* Capabilities section content */}
                I am versatile Full Stack Web and Software Developer
                adept in MERN, PERN, and Next.js stacks. With a robust skill set
                in frontend and backend technologies, I transform ideas into
                efficient, scalable, and user-friendly digital solutions.
                Passionate about clean code, problem-solving, and continuous
                learning, I thrive in creating innovative web applications that
                deliver a seamless user experience.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(About,"about");