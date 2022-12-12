import * as React from "react";
import "./Card.css";

interface IPropsCard {
  imageUrl: string;
}

const Card: React.FC<IPropsCard> = ({ imageUrl }) => {
  return (
    <>
      <div className="card">
        <img className="img" src={imageUrl} alt="sentinelMission" />
      </div>
    </>
  );
};

export default Card;
