import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

 const ExperienceUpload = () => {
//   const [formData, setFormData] = useState({
//     description: "",
//     endDate: "",
//     company: "",
//     location: "",
//     startDate: "",
//     title: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const token = Cookies.get("jwtToken");

//   if (!token) {
//     console.log("You need to Login");
//     window.location.href = "/";
//   }

//   const config = {
//     headers: {
//       Authorization: `${token}`,
//     },
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
     


//       const response = await axios.post(
//         `${Base_url}/experience`,
//         formData,
//         config
//       );

//       console.log("Data posted successfully:", response.data);
//     } catch (error) {
//       console.error('Error posting data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Experience Form</h2>
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
            Company:
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="text"
            name="company"
            value={formData.company}
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
            Location:
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="text"
            name="location"
            value={formData.location}
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

export default ExperienceUpload;