import React from "react";
import body from "../assets/man.png";
import Herobg from "./Herobg";
import download from "../assets/download.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Hero = () => {
  const { id } = useParams();
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const getProfile = async () => {
    try {
      const response = await axios.get(
        `https://minimal-resume-backend-1.onrender.com/profile/${id}`
      );
      console.log(response.data);
      setUser(response.data.profile)
    } catch (error) {
      console.error("Error:", error);
      setError(error.response.data.error || "Login failed");
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="lg:h-[600px] h-full w-full overflow-y-hidden font-mono shadow-lg">
      <div className="flex lg:flex-row flex-col  mt-10 lg:justify-between justify-start mx-8">
        <div>
          <h1 className="text-6xl font-medium text-[#d8874a]">
            Hey There, <br /> I'm {user.twitter}
          </h1>
        </div>

        <br />
        <div>
          <p className="mr-6 mt-4 text-xl text-slate-600">
            I create Wonderful things <br /> I create the best applications
          </p>
        </div>
      </div>

      <div className="h-44 w-44 lg:h-80 lg:w-80 rounded-full flex items-center justify-center mx-auto">
        <img
          className="rounded-full border-[5px] border-[#e09860]"
          src={body}
          alt="boy"
          width={300}
          height={300}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Hero;
