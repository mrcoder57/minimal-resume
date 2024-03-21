import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Cloudinary } from '@cloudinary/url-gen';

function UserProfileForm() {
  const [bio, setBio] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [error, setError] = useState(null);
  const [imagePublicId, setImagePublicId] = useState(null);
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Token = Cookies.get('token');
    //   console.log(Token)
      if (!Token) {
        console.log("You need to login or sign up");
        return;
      }
      
      const imageUrl = generateImageUrl();
        
      const response = await axios.post(`https://minimal-resume-backend-1.onrender.com/profile`, {
        bio,
        linkedin,
        twitter,
        profilePic: imageUrl,
      }, {
        headers: {
          Authorization: `${Token}`
        },
      });

      console.log('Profile updated successfully:', response.data);
    } catch (error) {
      console.error('Error:', error);
      setError(error.response.data.error || 'Failed to update profile');
    }
  };

  const handleImageUpload = async (event) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const preset = "ka34otny"; 
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", preset);

      try {
        setLoading(true);
        
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/duf2bmboc/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const result = await response.json();
          setLoading(false);

          if (result.public_id) {
            setImagePublicId(result.public_id);
          }
        } else {
          console.error("Image upload failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error during image upload:", error);
        setLoading(false);
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

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-8 mb-4">Update Profile</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
            Bio
          </label>
          <textarea
            id="bio"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedin">
            LinkedIn
          </label>
          <input
            id="linkedin"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your LinkedIn profile URL"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twitter">
            Twitter
          </label>
          <input
            id="twitter"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your Twitter profile URL"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePic">
            Profile Picture
          </label>
          <input
            id="profilePic"
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserProfileForm;
