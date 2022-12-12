import * as React from "react";
import Card from "../Card/Card";
import "./CardsWarper.css";
import { useEffect, useState } from "react";
import { fetchRandomImages } from "../../helpers/helpers";

const CardsWarper: React.FC = () => {
  const [imagesUrl, setImagesUrl] = useState<Array<string>>([]);

  useEffect(() => {
    const fechImages = async () => {
      const images = await fetchRandomImages();
      setImagesUrl(images);
    };

    fechImages();
  }, []);

  return (
    <div className="container">
      <Card imageUrl={imagesUrl[0]} />
      <Card imageUrl={imagesUrl[0]} />
    </div>
  );
};

export default CardsWarper;
