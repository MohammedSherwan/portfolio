import "./FooterStyles.css";

import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#1BA098", marginRight: "2rem" }}
            />
            <div>
              <p>Erbil / Kurdistan.</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#1BA098", marginRight: "2rem" }}
              />
              0750 889 2839
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#1BA098", marginRight: "2rem" }}
              />
              msh.ba567ahm@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            Welcome My name is Mohammed Sherwan i'm a Software Engineer and Web
            developer, let me help you to create your website.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{
                color: "#1BA098",
                marginRight: "1rem",
                cursor: "pointer",
              }}
              onMouseOver={({ target }) => (target.style.color = "#deb992")}
              onMouseOut={({ target }) => (target.style.color = "#1BA098")}
            />
            <FaGithub
              size={30}
              style={{
                color: "#1BA098",
                marginRight: "1rem",
                cursor: "pointer",
              }}
              onMouseOver={({ target }) => (target.style.color = "#deb992")}
              onMouseOut={({ target }) => (target.style.color = "#1BA098")}
            />
            <FaLinkedin
              size={30}
              style={{
                color: "#1BA098",
                marginRight: "1rem",
                cursor: "pointer",
              }}
              onMouseOver={({ target }) => (target.style.color = "#deb992")}
              onMouseOut={({ target }) => (target.style.color = "#1BA098")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
