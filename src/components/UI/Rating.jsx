import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <FaStar icon="star" key={index} />
      ))}
      {!Number.isInteger(rating) && <FaStarHalfAlt icon="star-half-alt" />}
    </div>
  );
};

export default Rating;
