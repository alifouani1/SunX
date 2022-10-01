import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="section">
        {/* <p className="section-1-text">
            <span className="">What is JWST?</span>
            <span className="section-1-text-2">The best place to learn about the Sun</span>
        </p> */}
        <div className="section-text">
          <h1>
            <span className="title">What is JWST?</span>
          </h1>
          <p className="desc">
            The James Webb Space Telescope (JWST) is the largest, most powerful,
            and most complex space science telescope ever built. Webb will solve
            mysteries in our solar system, look beyond to distant worlds around
            other stars, and probe the mysterious structures and origins of our
            universe and our place in it.
          </p>
        </div>
        <div className="section-1-img">
          <div className="img">
            <img
              src={require("../webb-imgs/auroras.jpg")}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-text">
          <h1>
            <span className="title">When did it luanch?</span>
          </h1>
          <p className="desc">
            Launched on December 25, 2021, JWST began producing its first
            amazing science images in July 2022.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-text">
          <h1>
            <span className="title">What do the images look like?</span>
          </h1>
          <p className="desc">
            These pictures are sharper and more sensitive than those from prior
            telescopes and will undoubtedly enable numerous new discoveries.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;