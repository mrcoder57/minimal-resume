import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Hero = () => {
 const { id } = useParams();
 const [error, setError] = useState(null);
 const [data, setData] = useState({});
 const [loading, setLoading] = useState(true); // Added loading state

 const getProfile = async () => {
    setLoading(true); // Set loading to true before fetching data
    try {
      const response = await axios.get(`https://minimal-resume-backend-1.onrender.com/profile/${id}`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
      setError(error.message); // Set error message
    } finally {
      setLoading(false); // Set loading to false after fetching data or if an error occurs
    }
 };

 useEffect(() => {
    getProfile();
 }, []);

 if (loading) return <div>Loading...</div>; // Conditional rendering for loading state
 if (error) return <div>Error: {error}</div>; // Conditional rendering for error state

 return (
    <div className="lg:h-[600px] h-full w-full overflow-y-hidden font-mono shadow-lg mb-20">
      <div className="flex lg:flex-row flex-col mt-10 lg:justify-between justify-start mx-8">
        <div>
          {data.profiles && data.profiles.twitter && (
            <h1 className="text-6xl font-medium text-[#d8874a]">
              Hey There, <br /> I'm {data.profiles.twitter || "loading"}
            </h1>
          )}
        </div>
        <br />
        <div>
          {data.profiles && data.profiles.bio && (
            <p className="mr-6 mt-4 text-xl text-slate-600">
              {data.profiles.bio || "Bio not available"}
            </p>
          )}
        </div>
      </div>
      {data.profiles && data.profiles.profilePic && (
        <div className="mt-14 mb-14 h-44 w-44 lg:h-80 lg:w-80 rounded-full flex items-center justify-center mx-auto">
          <img
            className="rounded-full border-[5px] border-[#e09860]"
            src={data.profiles.profilePic}
            alt="boy"
            width={300}
            height={300}
            draggable={false}
          />
        </div>
      )}
    </div>
 );
};

export default Hero;
