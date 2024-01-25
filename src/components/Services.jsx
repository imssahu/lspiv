import React from "react";
import VideoPlayer from "./VideoPlayer";
import Navbar from "./Navbar";
const Services = () => {
  return (
    <div>
      <Navbar />
      <h1
        style={{
          textAlign: "center",
        }}
      >
        OUTPUT
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <VideoPlayer url="/videos/01.webm" />
        <VideoPlayer url="/videos/02.webm" />
      </div>
    </div>
  );
};

export default Services;
