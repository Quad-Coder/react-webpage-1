import React from "react";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/ImageSliderData";

function Photography() {
  return (
    <div className="photography">
      <h1>Photos Of Mine</h1>
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default Photography;
