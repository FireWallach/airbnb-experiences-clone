import React from "react";
import Star from "../images/Star 1.png";
import KZaf from "../images/kzaf.png";

const Card = (props) => {
  return (
    <div className="card">
      {props.openSpots == 0 && <div className="card--badge">SOLD OUT</div>}
      <img src={KZaf} alt={props.title} />
      <div className="details">
        <img className="star" src={Star} alt="star" />
        <p className="star-value">{props.rating}</p>
        <p className="grayed-out space-left">
          ({props.reviewCount}) • {props.country}
        </p>
      </div>
      <p className="description">{props.title}</p>
      <p>
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
};

export default Card;
