import React from "react";
import Star from "../images/Star 1.png";
import KZaf from "../images/kzaf.png";

const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.country === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
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
