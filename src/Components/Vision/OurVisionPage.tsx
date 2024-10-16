import React from 'react';
import '../../style/visionStyle.scss';

function OurVisionPage() {
  return (
    <div className="visionpage">
      <h2 className="visionpage-h2">
        Our
        <span className="highlight"> Vision</span>
      </h2>

      <p className="vision-text">
        Data is at the center of all of our projects and our expertise, and data
        correlation involves us in each and every action of ours: from the
        simplest, most innocuous migration to full Data Management powered by
        our Data Science Institute. Data correlation demands performance,
        integrity, consistency, structuring, indexing, standardization,
        unsurpassed localization and critical security, but also – and most of
        all – Data Modeling, to mention just a few examples.
      </p>

      <h2 className="visionpage-h2">
        Locations,
        <span className="highlight"> Statistics </span>
        and
        <span className="highlight"> Values</span>
      </h2>

      <img className="vision-img" src="implantation.png" alt="implantation" />
      <img
        className="vision-img"
        src="CORELIA_Strategic_Partners.png"
        alt="Corelia Strategic Partners"
      />
    </div>
  );
}
export default OurVisionPage;
