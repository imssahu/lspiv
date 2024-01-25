import React, { useState } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ url, width = "100%" }) => {
  return (
    <div className="video-container">
      <video
        id="videoPlayer"
        controls
        className="custom-video-player"
        style={{ width: width }}
      >
        <source src={url} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
