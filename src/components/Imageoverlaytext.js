import React from "react";
import "./Image.css";
import { randomData } from "../Utils/Data";

const InstaCards = () => {
  const rows = [];
  let counter = 0;
  let currentRow = [];

  randomData.forEach((img, index) => {
    let imagesPerRow = counter % 2 === 0 ? 6 : 5;
    currentRow.push(
      <div className="container" key={index}>
        <div className="content">
          <div className="content-overlay"></div>
          <img
            className="content-image"
            src={img.image}
            alt={`Img Post ${index}`}
          />
          <div className="content-details fadeIn-top">
            <h3 className="content-text1">{img.name}</h3>
          </div>
          <div className="content-details fadeIn-bottom">
            <h3 className="content-text2">{img.title}</h3>
          </div>
        </div>
      </div>
    );

    if (currentRow.length === imagesPerRow || index === randomData.length - 1) {
      rows.push(
        <div className="row" key={index}>
          {currentRow}
        </div>
      );
      currentRow = [];
      counter++;
    }
  });

  return <div className="img-wrapper">{rows}</div>;
};

export default InstaCards;
