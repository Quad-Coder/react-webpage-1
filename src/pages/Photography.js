import React from "react";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/ImageSliderData";

function Photography() {
  return (
    <div className="Photography">
      <h1 style={{ color: '#bfc0c0'}}>Just Some Photos Of Mine</h1>
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default Photography;
