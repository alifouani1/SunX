import React from "react";
import "../styles/Home.css";
// import AnimatedText from "react-animated-text-content";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// const slideImages = [
//   {
//     url: "../webb-imgs/auroras.jpg",
//     caption: "Slide 1",
//   },
//   {
//     url: "../webb-imgs/auroras.jpg",
//     caption: "Slide 2",
//   },
//   {
//     url: "../webb-imgs/auroras.jpg",
//     caption: "Slide 3",
//   },
// ];

const slideImages = [
  "../webb-imgs/auroras.jpg",
  "https://react-slideshow.herokuapp.com/images/slide_3.jpg",
  "https://react-slideshow.herokuapp.com/images/slide_4.jpg",
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Home = () => {
  return (
    <div className="home">
      {/* <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: "200px",
          y: "-20px",
          scale: 1.1,
          ease: "ease-in-out",
        }}
        animationType="float"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        Welcome to the JWST Guide?
      </AnimatedText>
      <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: "200px",
          y: "-20px",
          scale: 1.1,
          ease: "ease-in-out",
        }}
        animationType="float"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        The James Webb Space Telescope (JWST) is the largest, most powerful, and
        most complex space science telescope ever built. Webb will solve
        mysteries in our solar system, look beyond to distant worlds around
        other stars, and probe the mysterious structures and origins of our
        universe and our place in it.
      </AnimatedText> */}
      {/* <div className="section">
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
<<<<<<< Updated upstream
          <div className="img">
            {/* <img
              src={require("../webb-imgs/auroras.jpg")}
              width={100}
              height={100}
            /> */}
          </div>
        </div>
=======
          <div className="slide-container">
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <div style={{ backgroundImage: `url(${slideImage.url})` }}>
                    <span>{slideImage.caption}</span>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div> */}
      <div className="section">
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
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                {/* <span>Slide 1</span> */}
                <img src={require("../webb-imgs/jwst1.jpg")} alt="auroras" />
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
                <img src={require("../webb-imgs/jwst2.jpg")} alt="auroras" />

              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
                <img src={require("../webb-imgs/jwst3.jpg")} alt="auroras" />
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
                <img src={require("../webb-imgs/jwst4.jpg")} alt="auroras" />
              </div>
            </div>
          </Slide>
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};
export default Home;
