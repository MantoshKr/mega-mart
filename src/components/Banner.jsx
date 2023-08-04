/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="w-full bg-white px-10 py-6 font-titleFont flex gap-4 ">
      <div className="w-full rounded-lg h-[320px] shadow-bannerShadow relative overflow-hidden">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div className="">
            <img loading="lazy" src="/assets/images/banner-1.jpg" alt="" />
          </div>
          <div className="=">
            <img loading="lazy" src="/assets/images/banner-2.jpg" alt="" />
          </div>

          <div className="">
            <img loading="lazy" src="/assets/images/banner-3.jpg" alt="" />
          </div>
          <div className="">
            <img loading="lazy" src="/assets/images/banner-4.jpg" alt=""  />
          </div>
          
        </Carousel>
      </div>
      {/* <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between"></div> */}
    </div>
  );
};

export default Banner;
