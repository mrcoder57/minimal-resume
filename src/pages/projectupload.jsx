import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Cloudinary } from "@cloudinary/url-gen";



const ProjectUpload = () => {
  const [imagePublicId, setImagePublicId] = useState(null);
  const [formData, setFormData] = useState({
    description: "",
    endDate: "",
    skills: ["node", "express"],
    startDate: "",
    title: "",
    url: "",
  });
const [loading,setLoading] = useState(true);
  const handleImageUpload = async (event) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const preset = "ka34otny"; // Replace with your Cloudinary upload preset
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", preset);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/duf2bmboc/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const result = await response.json();
            setLoading(false)
          if (result.public_id) {
            setImagePublicId(result.public_id);
          }
        } else {
          console.error("Image upload failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error during image upload:", error);
      }
    }
  };

  const generateImageUrl = () => {
    if (imagePublicId) {
      const cld = new Cloudinary({
        cloud: {
          cloudName: "duf2bmboc",
        },
      });

      const img = cld.image(imagePublicId);
      return img.toURL();
    }

    return "";
  };

  const token = Cookies.get("jwtToken");
  if (!token) {
    console.log(" You need to Login");
    window.location.href = "/";
  }

  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    console.log(formData)
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "skills"
          ? value.split(",").map((skill) => skill.trim())
          : value,
    }));
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {

//       const imageUrl = generateImageUrl();

//     console.log(imageUrl)
//       setFormData((prevData) => ({
//         ...prevData,
//         image: imageUrl,
//       }));

    
//       const response = await axios.post(
//         `${Base_url}/project`,
//         formData,
//         config
//       );

//       console.log("Data posted successfully:", response.data);

//     } catch (error) {
//         if (error.response) {

//             console.error('Server Error:', error.response.status);
//             console.error('Response Data:', error.response.data);
//             console.error('Response Headers:', error.response.headers);
//           } else if (error.request) {
            
//             console.error('No response received:', error.request);
//           } else {

//             console.error('Request setup error:', error.message);
//           }
//     }
//   };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Project Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Description:
          </label>
          <textarea
            className="w-full p-2 border rounded-md"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Start Date:
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="text"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            End Date:
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="text"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Image:
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="file"
            name="image"
            onChange={handleImageUpload}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Skills:
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="text"
            name="skills"
            value={
              Array.isArray(formData.skills) ? formData.skills.join(", ") : ""
            }
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Title:
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Project URL:
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="text"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectUpload;