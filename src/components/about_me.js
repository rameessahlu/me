import React, { Component } from "react";
import "../styles/about_me.css";
import profile_photo from "../assets/profile_pic.png";
import { Grid, Cell } from "react-mdl";

class AboutMe extends Component {
  render() {
    return (
      <div
        className="heading"
        style={{ paddingTop: "10em", marginBottom: "2em" }}
        id={"about_me"}
      >
        <Grid className="about-me-grid">
          <Cell col={8}>
            <h3
              style={{
                textAlign: "left",
                margin: "0 auto",
                justifyContent: "center",
                marginBottom: "1em",
                fontFamily: "Lato",
              }}
              className="proj-heading intro"
            >
              <span className="numbering">01.</span>About Me
            </h3>
            <p
              style={{
                fontSize: "18px",
                textAlign: "justify",
                lineHeight: 1.5,
              }}
              data-aos="zoom-out-left"
              display="block"
              id="intro"
            >
              Hi! I'm Ramees Sahlu, a full-stack engineer based in Bangalore, India. 
              I've been in the software industry for more than two years and have worked at both startups and large organizations. 
              My professional experience varies from full-stack development to DevOps automation such as CI/CD pipeline, testing and deployment. 
              I enjoy my work, whether it's software development or design and feel passionate about every contribution I make. 
              <br />
              <br />
              I also like to build fun little products like Android apps, web apps or even indie-games as a hobby. 
              Few of the projects are listed below and please feel free to send me your feedback. Thank You.
            </p>
            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rameessahlu/"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-left"
                data-aos-anchor="intro"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/rameessahlu"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-in"
                data-aos-anchor="intro"
              >
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
              {/* Play Store */}
              <a
                href="https://play.google.com/store/apps/developer?id=diloopStudios"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-right"
                data-aos-anchor="intro"
              >
                <i className="fa fa-play" aria-hidden="true"></i>
              </a>
            </div>
          </Cell>
          <Cell col={3.5}>
            <img
              src={profile_photo}
              alt="profile_photo"
              className="profile-img"
              data-aos="fade-up"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
