import React from "react";

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className=" text-3xl text-center font-bold">Intro</p>
      <br />
      <div className="w-[500px] h-[300px]">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZPhlSqHN4yg?si=fZmzJeq99gbnwUd4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
