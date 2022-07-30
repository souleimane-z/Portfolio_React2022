import React from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import CV from "../../Assets/CV.pdf";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet tincidunt luctus. Nullam quis aliquam orci. Nam mollis bibendum turpis, vel tristique mi accumsan quis. Donec facilisis sollicitudin ante ut porta. Duis aliquet, lacus sit amet mattis venenatis, risus velit venenatis dolor, in tempus turpis nibh eu sem. In et egestas justo, in tincidunt lacus. Etiam in ante elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis hendrerit odio ex, in gravida erat placerat vitae. Phasellus et lorem quis est convallis consectetur. Donec sed ligula sit amet sapien pellentesque varius. Nam malesuada efficitur leo ut facilisis. Maecenas nisi ligula, volutpat et dictum faucibus, varius a nunc. Proin lacinia venenatis magna ut euismod. Integer luctus nunc lectus, vel dictum neque varius non.",
    highlights: {
      bullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet tincidunt luctus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet tincidunt luctus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet tincidunt luctus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet tincidunt luctus.",
      ],
      heading: "Mes Loisirs & Passions :",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading
          title={"À Propos de Moi"}
          subHeading={"Pourquoi me Choisir?"}
        />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlights-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                M'engager{" "}
              </button>
              <a href={CV} download="CV de Souleimane ZEGGAI.pdf">
                <button className="btn highlighted-btn">Télécharger CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
