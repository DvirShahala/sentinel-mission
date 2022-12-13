import * as React from "react";
import "./Card.css";

interface IPropsCard {
  imageUrl: string;
  brightness: number;
}

const Card: React.FC<IPropsCard> = ({ imageUrl, brightness }) => {
  return (
    <>
      <div className="card">
        <img
          className="img"
          src={imageUrl}
          style={{
            filter: `brightness(${brightness}%)`,
          }}
          alt="sentinelMission"
        />
      </div>
    </>
  );
};

export default Card;
