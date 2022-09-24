import React from "react";
import SponsorList from "./SponsorsList.js";
import "./Supporter.css";

function Supporter() {
  return (
    <div>
      <div className="heading">Foundation Supporters</div>
      <div className="centered-container-logos space-x ">
        {SponsorList.map((sponsor) => {
            return (
                <div className="logos">
                  <a className="hover-underline" href={sponsor.url} >
                    <img className="image" src={sponsor.image} alt={sponsor.name} />
                    <div className="image-text">{sponsor.name}</div>
                  </a>
                </div>
            );
        })}
      </div>
    </div>
  );
}

export default Supporter;
