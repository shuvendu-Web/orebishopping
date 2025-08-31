import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image from "../designLayouts/Image";

// Import images
import bannerImgOne from "../../assets/images/banner/bannerImgOne.webp";
import bannerImgTwo from "../../assets/images/banner/bannerImgTwo.webp";
import bannerImgThree from "../../assets/images/banner/bannerImgThree.webp";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => setDocActive(next),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
              width: "30px",
              color: "#262626",
              borderRight: "3px #262626 solid",
              padding: "8px 0",
              cursor: "pointer",
            }
            : {
              width: "30px",
              color: "transparent",
              borderRight: "3px white solid",
              padding: "8px 0",
              cursor: "pointer",
            }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}>{dots}</ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                    width: "25px",
                    color: "#262626",
                    borderRight: "3px #262626 solid",
                    cursor: "pointer",
                    fontSize: "12px",
                  }
                  : {
                    width: "25px",
                    color: "transparent",
                    borderRight: "3px white solid",
                    cursor: "pointer",
                    fontSize: "12px",
                  }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  // Slides data
  const slides = [
    {
      img: bannerImgOne,
      title: "🎧 Experience Sound Like Never Before",
      text: "Discover the latest in innovative electronics designed to simplify your lifestyle and boost productivity.",
    },
    {
      img: bannerImgTwo,
      title: "⚡ Powering the Future of Electronics",
      text: "Top-tier audio gadgets built to deliver immersive sound and unmatched clarity for every moment.",
    },
    {
      img: bannerImgThree,
      title: "📱 Smart Devices for a Smarter You",
      text: "Stay connected and in control with our range of cutting-edge smart devices tailored for modern living.",
    },
  ];

  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Link to="/offer" key={index}>
            <div className="relative w-full h-[90vh] flex items-center">
              {/* Background Image */}
              <Image
                imgSrc={slide.img}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Left-Aligned Content */}
              <div className="absolute inset-0 flex flex-col justify-center 
  text-center md:text-left z-10 
  px-4 md:px-0 md:pl-[10rem] md:max-w-[50%]">
                <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg text-black max-w-xl md:max-w-none">
                  {slide.text}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;