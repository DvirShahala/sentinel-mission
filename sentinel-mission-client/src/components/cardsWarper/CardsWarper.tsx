import * as React from "react";
import Card from "../Card/Card";
import "./CardsWarper.css";
import { useEffect, useState } from "react";
import { fetchRandomImages } from "../../helpers/helpers";

const CardsWarper: React.FC = () => {
  const [imagesUrl, setImagesUrl] = useState<Array<string>>([]);
  const [brightness, setBrightness] = useState<number>(100);

  useEffect(() => {
    const fechImages = async () => {
      const images = await fetchRandomImages(2);
      setImagesUrl(images);
    };

    fechImages();
  }, []);

  const handleReplace = async () => {
    setImagesUrl([]);
    const images = await fetchRandomImages(2);
    setImagesUrl(images);
    setBrightness(100);
  };

  const handleBrighten = () => {
    setBrightness(brightness + 10);
  };

  const handleDarker = () => {
    setBrightness(brightness - 10);
  };

  return (
    <>
      <div className="container">
        {imagesUrl.length
          ? imagesUrl.map((imageUrl) => (
              <Card
                key={imageUrl}
                imageUrl={imageUrl}
                brightness={brightness}
              />
            ))
          : "Loading..."}
      </div>
      <div className="container">
        <button onClick={handleReplace}>Replace</button>
        <button onClick={handleBrighten}>Brighten</button>
        <button onClick={handleDarker}>Darker</button>
      </div>
    </>
  );
};

export default CardsWarper;
