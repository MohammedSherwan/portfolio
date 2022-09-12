import "./HeroimgStyles.css";

import React from "react";

import IntroImg from "../assets/image1.jpg";
import Intropdf from "../assets/pdf/muhammed sherwan cv.pdf";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I'm Mohammed</p>
        <h1>Web Developer</h1>
        <div>
          <a download="" href={Intropdf} className="btn">
            Resume
          </a>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
