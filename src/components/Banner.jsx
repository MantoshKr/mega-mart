/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="w-full bg-grey-200 px-10 py-6 font-titleFont flex gap-4 ">
      <div className="w-full rounded-lg h-full shadow-bannerShadow relative overflow-hidden hidden md:block ">
        <div className="absolute xl:h-96 lgl:h-72 lg:h-60 mdl:h-48 md:h-36 w-full bg-gradient-to-t from-white to-transparent bottom-0 z-20" />
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div className="h-full">
            <img
              loading="lazy"
              src={"/static/images/acer-banner.jpg"}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-full">
            <img
              loading="lazy"
              src={"/static/images/redmi-banner.jpg"}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-full">
            <img
              loading="lazy"
              src={"/static/images/watch-banner.jpg"}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-full">
            <img
              loading="lazy"
              src={"/static/images/safari-banner.jpg"}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-full">
            <img
              loading="lazy"
              src={"/static/images/tv-banner.jpg"}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-full">
            <img
              loading="lazy"
              src={"/static/images/festival-banner.jpg"}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-full">
            <img
              loading="lazy"
              src={"/static/images/diwali-banner.jpg"}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </Carousel>
      </div>
      {/* <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between"></div> */}
    </div>
  );
};

export default Banner;
