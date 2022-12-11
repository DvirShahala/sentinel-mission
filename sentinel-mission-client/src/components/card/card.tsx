import * as React from "react";
import imageExample from "../../images/exampleImageCard.jpeg";

const Card: React.FC = () => {
  return (
    <>
      <div className="card">
        <img
          src="https://scihub.copernicus.eu/dhus/odata/v1/Products('2b17b57d-fff4-4645-b539-91f305c27c69')/Nodes('S1A_IW_SLC__1SDV_20160117T103451_20160117T103518_009533_00DD94_D46A.SAFE') /Nodes('preview')/Nodes('quick-look.png')/$value"
          alt="sentinelMission"
        />
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
