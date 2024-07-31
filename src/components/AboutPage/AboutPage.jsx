import React from "react";
import OurValues from "./OurValues/OurValues";
import OurTeam from "./OurTeam/OurTeam";
import Experience from "./Experience/Experience";
// import StartToday from "../../containers/StartToday/StartToday";
import OurJourney from "./OurJourney/OurJourney";
import "./aboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <OurJourney />
      <OurValues />
      <Experience />
      <OurTeam />
      {/* <StartToday /> */}
    </div>
  );
};

export default AboutPage;
