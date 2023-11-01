const { BsStarFill, BsStarHalf } = require("react-icons/bs");
import React from "react";

const RenderStars = ({ rating }) => {
  const stars = [];
  const totalStars = 5;

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<BsStarFill key={i} className="text-yellow" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<BsStarHalf key={i} className="text-yellow" />);
    } else {
      stars.push(<BsStarFill key={i} className="text-gray-300" />);
    }
  }

  return stars;
};

export default RenderStars;
