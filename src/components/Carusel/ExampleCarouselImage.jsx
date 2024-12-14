import React from "react";

function ExampleCarouselImage({ text }) {
  return <img src={`/assets/img/carusel/${text}.jpeg`} alt={text} />;
}

export default ExampleCarouselImage;
