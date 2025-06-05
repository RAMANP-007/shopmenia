import React from "react";
import "./descriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website built using react.js and redux. that faciliates bying and selling products online.</p>
        <p>This is a full stack application with backend developed in nodejs, express and mongodb database.</p>
      </div>
    </div>
  );
}

export default DescriptionBox;
