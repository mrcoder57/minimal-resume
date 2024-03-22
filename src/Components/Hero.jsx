import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import cap from "../assets/cap.jpeg"
import Cookies from "js-cookie";
const Hero = () => {
 const { id } = useParams();
 const [error, setError] = useState(null);
 const [data, setData] = useState({});
 const [loading, setLoading] = useState(true);

 const getProfile = async () => {
    setLoading(true); 
    try {
      const response = await axios.get(`https://minimal-resume-backend-1.onrender.com/profile/${id}`);
      console.log(response.data);
      Cookies.set('profileid',response.data.profiles.id)
      setData(response.data);
    } catch (error) {
      console.log(error);
      setError(error.message); 
    } finally {
      setLoading(false); 
    }
 };

 useEffect(() => {
    getProfile();
 }, []);

 if (loading) return <div>Loading...</div>; 
 if (error) return <div>Error: {error}</div>; 

 return (
    <div className="lg:h-[600px] h-full w-full overflow-y-hidden font-mono shadow-md mb-20">
      <div className="flex lg:flex-row flex-col mt-10 lg:justify-between justify-start mx-8">
        <div>
          {data.profiles && data.profiles.name && (
            <h1 className="text-6xl font-medium text-[#d8874a]">
              Hey There, <br /> I'm {data.profiles.name || "loading"}
            </h1>
          )}
        </div>
        <br />
        <div>
          {data.profiles && data.profiles.bio && (
            <p className="mr-6 mt-4 text-xl text-slate-600 flex items-center justify-center mx-auto">
              {data.profiles.bio || "Bio not available"}
            </p>
          )}
        </div>
      </div>
      {data.profiles && data.profiles.profilePic ? (
  <img
    className="rounded-full border-[5px] border-[#e09860] object-cover mx-auto"
    src={data.profiles.profilePic}
    alt="boy"
    width={300}
    height={300}
    draggable={false}
  />
) : (
  <img
    className="rounded-full border-[5px] border-[#e09860] mx-auto"
    src={cap} // Replace with the path to your default profile picture
    alt="Default Profile Pic"
    width={300}
    height={300}
    draggable={false}
  />
)}
    </div>
 );
};

export default Hero;
