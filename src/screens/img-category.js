import { Carousel } from "3d-react-carousal";
import React, { Component } from "react";
import "../styles/imgCat.css";
// var Carousel = require( '3d-react-carousal').Carousel;

let slides = [
  //get imgs from imgs folder
  <img
    src={require("../webb-imgs/auroras.jpg")}
    alt="1"
    width={550}
    height={350}
  />,
  <img
    src={require("../webb-imgs/cosmicTarantula-2.jpg")}
    alt="2"
    width={550}
    height={350}
  />,
  <img
    src={require("../webb-imgs/distantWorld.jpg")}
    alt="3"
    width={550}
    height={350}
  />,
  <img
    src={require("../webb-imgs/IC5332.jpg")}
    alt="4"
    width={550}
    height={350}
  />,
  <img
    src={require("../webb-imgs/neptuneRing-2.jpg")}
    alt="5"
    width={550}
    height={350}
  />,
  <img
    src={require("../webb-imgs/neptuneRing-3.jpg")}
    alt="6"
    width={550}
    height={350}
  />,
  <img
    src={require("../webb-imgs/neptuneRing.jpg")}
    alt="7"
    width={550}
    height={350}
  />,
  <img
    src={require("../webb-imgs/phantomAcrossTheSpectrum.jpg")}
    alt="8"
    width={550}
    height={350}
  />,
  <img
    src={require("../webb-imgs/phantomGalaxy.jpg")}
    alt="9"
    width={550}
    height={350}
  />,
  // <img
  //   src={require("../webb-imgs/hubandWebb.jpg")}
  //   alt="10"
  //   width={550}
  //   height={350}
  // />,
  // <img
  //   src={require("../webb-imgs/auroras-1.jpg")}
  //   alt="11"
  //   width={550}
  //   height={350}
  // />,
  // <img
  //   src={require("../webb-imgs/blackholes-1.jpg")}
  //   alt="12"
  //   width={550}
  //   height={350}
  // />,
  // <img
  //   src={require("../webb-imgs/dryingstars.jpg")}
  //   alt="13"
  //   width={550}
  //   height={350}
  // />,
  // <img
  //   src={require("../webb-imgs/infrared.jpg")}
  //   alt="14"
  //   width={550}
  //   height={350}
  // />,
  // <img
  //   src={require("../webb-imgs/nebula.jpg")}
  //   alt="15"
  //   width={550}
  //   height={350}
  // />,
];

export const ImgCategory = () => {
  return (
    <div className="img-category">
      <div className="img-category-container">
        <h1 className="cat-title">JWST Images</h1>
        <Carousel slides={slides} /*autoplay={true}*/ interval={1000} />
      </div>
    </div>
  );
};
