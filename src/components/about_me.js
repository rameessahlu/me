import React, { Component } from "react";
import "./styles/about_me.css";
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
          <Cell col={3.5}>
            <img
              src={profile_photo}
              alt="profile_photo"
              className="profile-img"
              data-aos="fade-up"
            />
          </Cell>
          <Cell col={8}>
            <h3 style={{ textAlign: "left" }} data-aos="fade-in">
              <i>Hi! I'm Ramees Sahlu</i>
            </h3>
            <p
              style={{
                fontSize: "18px",
                textAlign: "justify",
                lineHeight: 1.5,
              }}
              data-aos="fade-in"
              display="block"
            >
              I'm a recently graduated full-stack software developer based in
              Bangalore, India. I have previously worked as a full-stack
              developer at UST Global for 2 years where I was focused on
              development to DevOps automation such as CI/CD pipeline, testing
              and deployment. I am a passionate learner and I enjoy writing code
              and building products, whether that be websites, apps or even
              games.
              <br />
              <br />
              I'm currently looking for a job to restart my career after my
              Master's, so if you think I'd be a good fit, get in touch. You are
              welcome to check out my GitHub projects and some of my recent
              projects are given below.
            </p>
            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rameessahlu/"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-left"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/rameessahlu"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-in"
              >
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
              {/* Play Store */}
              <a
                href="https://play.google.com/store/apps/developer?id=diloopStudios"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-right"
              >
                <i className="fa fa-play" aria-hidden="true"></i>
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
