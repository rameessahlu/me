import React, { Component } from "react";
import "./styles/contact_me.css";

class ContactMe extends Component {
  render() {
    return (
      <div id={"contact_me"}>
        <h3
          style={{
            textAlign: "left",
            margin: "0 auto",
            justifyContent: "center",
            marginBottom: "1em",
            fontFamily: "Lato",
            width: "82%",
          }}
          className="intro"
        >
          <span className="numbering">03.</span>Contact Me
        </h3>
        <div className="social-links-about-me">
          {/* Email */}
          <a
            href="mailto:rameessahlumv@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rameessahlu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/rameessahlu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github-square" aria-hidden="true"></i>
          </a>
          {/* Play Store */}
          <a
            href="https://play.google.com/store/apps/developer?id=diloopStudios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-play" aria-hidden="true"></i>
          </a>
        </div>
        <div className="footer">
          Designed & Built by Ramees Sahlu. <br />
          This site is built with ReactJS. The source code can be found on{" "}
          <a href="https://github.com/rameessahlu/me">Github</a>.
        </div>
      </div>
    );
  }
}

export default ContactMe;
