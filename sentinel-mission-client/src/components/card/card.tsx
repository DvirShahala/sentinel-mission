import * as React from "react";
import { useEffect, useState } from "react";
import { fetchRandomImages } from "../../helpers/helpers";

const Card: React.FC = () => {
  const [imagesUrl, setImagesUrl] = useState<Array<string>>([]);

  useEffect(() => {
    const fechImages = async () => {
      const images = await fetchRandomImages();
      setImagesUrl(images);
    };

    fechImages();
  }, []);

  return (
    <>
      <div className="card">
        <img src={imagesUrl[0]} alt="sentinelMission" />
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </>
  );
};

export default Card;
