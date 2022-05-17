import React from "react";
import { SliderData } from "./ImageSliderData";

const ImageSlider = () => {
  return (
    <>
      <div>Image</div>
      {SliderData.map((slide, index) => {
        return <img src={slide.image} alt="Image Not Found" />;
      })}
    </>
  );
};

export default ImageSlider;
