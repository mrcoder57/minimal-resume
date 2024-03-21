import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Linkedin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "https://ceddit.onrender.com/api/posts"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return <div>No posts found</div>;

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

  return (
    <div className="container mx-auto p-8">
        <h2 className=" text-[#e09860] text-center text-4xl font-bold font-mono">
            Blogs
        </h2>
      <Carousel responsive={responsive}>
        {data.map((post) => (
          <div className="card lg:w-80 w-64 glass mt-6 mx-4 shadow-lg mb-3" key={post._id}>
            <div className="card-body">
              <div className="flex flex-row justify-between gap-3">
                <h2 className="card-title font-bold">{post.title}</h2>
                <p>{post.createdAt.slice(0, 10)}</p>
              </div>
              <p>
                {showFullDescription ? post.content : `${post.content.slice(0, 80)}...`}
                <button className="btn btn-ghost underline" onClick={toggleDescription}>
                  {showFullDescription ? "Read Less" : "Read More"}
                </button>
              </p>
              <p className="font-semibold">Admin: {post.user.username}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Linkedin;
