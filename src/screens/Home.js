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
    </div>
  );
};
export default Home;
