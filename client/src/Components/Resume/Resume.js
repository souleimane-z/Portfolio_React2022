import React, { useState, useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span className="heading">{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-second-heading">
        <span>{props.secHeading ? props.secHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };
  const resumeBullets = [
    { label: "Formation", logoSrc: "education.svg" },
    { label: "Expériences Récentes", logoSrc: "work-history.svg" },
    { label: "Autres Expériences", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    // { label: "Projets Notables", logoSrc: "projects.svg" },
    { label: "Loisirs", logoSrc: "interests.svg" },
  ];
  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 62 },
    { skill: "Node JS", ratingPercentage: 52 },
    { skill: "Express JS", ratingPercentage: 52 },
    { skill: "Mongo DB", ratingPercentage: 52 },
    { skill: "MySQL", ratingPercentage: 52 },
    { skill: "SEO", ratingPercentage: 65 },
    { skill: "WCAG", ratingPercentage: 65 },
    { skill: "SASS", ratingPercentage: 65 },
    { skill: "Tailwind", ratingPercentage: 65 },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="Formation" id="formation">
      <ResumeHeading
        heading={"Lorem"}
        subHeading={"Lorem ipsum dolor"}
        secHeading={"Lorem ipsum dolor"}
        fromDate={"2021"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"Lorem"}
        subHeading={"Lorem ipsum dolor"}
        secHeading={"Lorem ipsum dolor"}
        fromDate={"2015"}
        toDate={"2015"}
      />
      <ResumeHeading
        heading={"Lorem"}
        subHeading={"Lorem ipsum dolor"}
        fromDate={"2014"}
        toDate={"2014"}
      />
    </div>,

    /* WORK EXPERIENCE: 1 */
    <div className="resume-screen-container" key="Expériences Récentes">
      <div className="experience-container">
        <ResumeHeading
          heading={"lorem"}
          subHeading={"Lorem ipsum dolor"}
          fromDate={"2019"}
          toDate={"2019"}
        />
        <div className="experience-description">
          <span className="resume-description-text resume-description-text_semibold ">
          Lorem ipsum dolor sit amet,
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            • Lorem ipsum dolor sit amet,
          </span>
          <br />
          <span className="resume-description-text">
            • Lorem ipsum dolor sit amet,
          </span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Lorem"}
          subHeading={"Lorem ipsum dolor"}
          fromDate={"2018"}
          toDate={"2018"}
        />
        <div className="experience-description">
          <span className="resume-description-text resume-description-text_semibold ">
          Lorem ipsum dolor sit amet,
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            • Lorem ipsum dolor sit amet,
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            • Prise en charge de nombreux clients toutes les 3min.
          </span>
        </div>
      </div>
    </div>,
    /* WORK EXPERIENCE: 2 */
    <div className="resume-screen-container" key="Autres Expériences">
      <div className="experience-container">
        <ResumeHeading
          heading={"Lorem"}
          subHeading={"Lorem ipsum dolor"}
          fromDate={"2012"}
          toDate={"2015"}
        />
        <div className="experience-description">
          <span className="resume-description-text resume-description-text_semibold ">
          Lorem ipsum dolor sit amet,
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            • Lorem ipsum dolor sit amet,
          </span>
          <br />
          <span className="resume-description-text">
            • Lorem ipsum dolor sit amet,
          </span>
          <br />
          <span className="resume-description-text">
            • Lorem ipsum dolor sit amet,
          </span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Lorem"}
          subHeading={"Lorem ipsum dolor"}
          fromDate={"2017"}
          toDate={"2017"}
        />
        <div className="experience-description">
          <span className="resume-description-text resume-description-text_semibold ">
          Lorem ipsum dolor sit amet,
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            • Lorem ipsum dolor sit amet,
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            • Lorem ipsum dolor sit amet,
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="Skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    
    /* Interests */
    <div className="resume-screen-container" key="Loisirs">
      <ResumeHeading
        heading="Musique 🎹"
        description="Lorem ipsum dolor sit amet,"
      />
      <ResumeHeading
        heading="Sport 🏉"
        description="Lorem ipsum dolor sit amet,"
      />
      <ResumeHeading
        heading="Culture 📚"
        description="Lorem ipsum dolor sit amet,"
      />
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;

    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarouselOffSetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../Assets/Resume/${bullet.logoSrc}`)}
          alt="logos"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Cursus"} subHeading={"Formation & Carrière"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
