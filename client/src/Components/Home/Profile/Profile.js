import React from "react";
import "./Profile.css"
import Typical from "react-typical";
import ScrollService from "../../../Utilities/ScrollService";
import CV from "../../../Assets/CV.pdf";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square socialsIcons"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square socialsIcons"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook-square socialsIcons"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram socialsIcons"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter socialsIcons"></i>
              </a>

            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Bonjour, je m'appelle{" "}
              <span className="highlighted-text">John</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Développeur WEB",
                    1000,
                    "Front-End",
                    1000,
                    "Référencement (SEO)",
                    1000,
                    "Accessibilité (WCAG)",
                    1000,
                    "React.JS",
                    1000,
                    "Node.JS",
                    1000,
                    "MySQL",
                    1000,
                    "MongoDB",                    
                    1000,
                    ".",
                    500, 
                    "..",
                    500, 
                    "...",
                    1000,                    
                  ]}
                  wrapper="span"
                />
              </h1>
              <span className="profile-role-tagline">
                Développeur WEB qui vous aide à passer au numérique
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> M'engager </button>
            <a href={CV} download="CV de John Doe.pdf">
              <button className="btn highlighted-btn">Télécharger CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
