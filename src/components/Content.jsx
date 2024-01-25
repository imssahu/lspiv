import React from "react";
import "./Content.css";
const Content = () => {
  return (
    <div className="content-container">
      <h2 className="content-title">Project Details</h2>
      <p className="content-text">
        <h1>Fudaa-LSPIV</h1>
        Since the late 1990s, image sequence analysis velocimetry techniques
        (such as PIV – Particle Image Velocimetry) developed in the laboratory
        have been gradually applied to outdoor geophysical flows, particularly
        watercourses (Fujita et al. 1998; Hauet 2006). The movement of tracers
        (natural or added) visible on the surface of the flow is detected by
        autocorrelation of patterns from one image to the next, after
        orthorectification of the images; the surface velocity fields thus
        obtained can be filtered and averaged over a series of image pairs to
        establish the average velocity field; using one or more bathymetric
        transects and coefficients linking surface velocity and depth-average
        velocity, one or more discharge estimates can be calculated.
      </p>
      <img src="./videos/i2.jpeg"></img>
      <img src="./videos/images1.jpeg"></img>
    </div>
  );
};

export default Content;
