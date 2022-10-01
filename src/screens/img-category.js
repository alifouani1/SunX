import { Carousel } from "3d-react-carousal";
import React, { Component } from "react";
import "../styles/imgCat.css";
// var Carousel = require( '3d-react-carousal').Carousel;

let slides = [
  //get imgs from imgs folder
  <img
    src="https://picsum.photos/800/300/?random"
    alt="1"
    width={500}
    height={300}
  />,
  <img
    src="https://picsum.photos/800/301/?random"
    alt="2"
    width={500}
    height={300}
  />,
  <img
    src="https://picsum.photos/800/302/?random"
    alt="3"
    width={500}
    height={300}
  />,
  <img
    src="https://picsum.photos/800/303/?random"
    alt="4"
    width={500}
    height={300}
  />,
  <img
    src="https://picsum.photos/800/304/?random"
    alt="5"
    width={500}
    height={300}
  />,
  <img
    src="../imgs/webb-imgs/auroras.jpg"
    alt="6"
    width={500}
    height={300}
  />,
  <img
    src="https://picsum.photos/800/303/?random"
    alt="7"
    width={500}
    height={300}
  />,
  <img
    src="https://picsum.photos/800/303/?random"
    alt="8"
    width={500}
    height={300}
  />,
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
