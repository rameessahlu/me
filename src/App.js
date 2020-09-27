import React from "react";
import "./App.css";
import { Navigation, Drawer, Content, Layout, Header } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Layout className="layout-color">
            <Header
              className="header-style"
              transparent
              title={
                <div style={{ fontFamily: "Cedarville Cursive" }}>
                  <img src={logo} alt="logo" width="25" height="25" />
                  Ramees Sahlu
                </div>
              }
              style={{ color: "white" }}
            >
              <Navigation>
                <HashLink to="/#about_me">
                  <span className="hash-link-style">
                    <span className="numbering">01.</span> About Me
                  </span>
                </HashLink>
                <HashLink to="/#solo_projects">
                  <span className="hash-link-style">
                    <span className="numbering">02.</span> Projects
                  </span>
                </HashLink>
                <HashLink to="/#contact_me">
                  <span className="hash-link-style">
                    <span className="numbering">03.</span> Contact Me
                  </span>
                </HashLink>
                <Link to="/resume">
                  <span className="hash-link-style">
                    <span className="numbering">04.</span> Resume
                  </span>
                </Link>
              </Navigation>
            </Header>
            <Drawer
              title={
                <div
                  style={{
                    fontFamily: "Cedarville Cursive",
                    color: "white",
                  }}
                >
                  Ramees Sahlu
                </div>
              }
              style={{ color: "black", background: "#0A192F" }}
            >
              <Navigation>
                <Link to="/">
                  <span className="link-style">
                    <span className="numbering">01.</span>About Me
                  </span>
                </Link>
                <Link to="/solo_projects">
                  <span className="link-style">
                    <span className="numbering">02.</span>Solo Projects
                  </span>
                </Link>
                <Link to="/group_projects">
                  <span className="link-style">
                    <span className="numbering">03.</span>Group Projects
                  </span>
                </Link>
                <Link to="/contact_me">
                  <span className="link-style">
                    <span className="numbering">04.</span>Contact Me
                  </span>
                </Link>
              </Navigation>
            </Drawer>
            <Content>
              <Main />
            </Content>
          </Layout>
        </div>
      </header>
    </div>
  );
}

export default App;
