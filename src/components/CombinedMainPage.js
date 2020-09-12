import React, { Component } from "react";
import AboutMe from "./about_me";
import SoloProjects from "./solo_projects";
import GroupProjects from "./group_projects";
import ContactMe from "./contact_me";
import AOS from "aos";
import "aos/dist/aos.css";

class CombinedMainPage extends Component {
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 3000,
      disableMutationObserver: false,
    });
  }

  render() {
    return (
      <div>
        <AboutMe />
        <GroupProjects />
        <SoloProjects />
        <ContactMe />
      </div>
    );
  }
}

export default CombinedMainPage;
