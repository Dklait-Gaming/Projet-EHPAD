import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "./src/images/ski.jpg",
  "./src/images/ski.jpg",
  "./src/images/ski.jpg",
];

export default function CarouselImg() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Slider {...settings} style={{ width: "100%", maxWidth: "600px" }}>
        {images.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`Image ${index + 1}`}
            sx={{
              display: "block",
              width: "100%",
              height: "auto",
              objectFit: "contain",
              margin: "0 auto",
            }}
          />
        ))}
      </Slider>
    </Box>
  );
}
