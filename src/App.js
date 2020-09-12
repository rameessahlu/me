import React from "react";
import "./App.css";
import { Navigation, Drawer, Content, Layout, Header } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Layout className="layout-color">
            <Header
              transparent
              title={
                <div style={{ fontFamily: "Cedarville Cursive" }}>
                  Ramees Sahlu
                </div>
              }
              style={{ color: "black" }}
              className="header-color"
            >
              <Navigation>
                <HashLink
                  to="/#about_me"
                  style={{ color: "black", fontFamily: "Lato" }}
                >
                  About Me
                </HashLink>
                <HashLink
                  to="/#group_projects"
                  style={{ color: "black", fontFamily: "Lato" }}
                >
                  Group Projects
                </HashLink>
                <HashLink
                  to="/#solo_projects"
                  style={{ color: "black", fontFamily: "Lato" }}
                >
                  Solo Projects
                </HashLink>
                <HashLink
                  to="/#contact_me"
                  style={{ color: "black", fontFamily: "Lato" }}
                >
                  Contact Me
                </HashLink>
                <Link
                  to="/resume"
                  style={{ color: "black", fontFamily: "Lato" }}
                >
                  Resume
                </Link>
              </Navigation>
            </Header>
            <Drawer
              title={
                <div style={{ fontFamily: "Cedarville Cursive" }}>
                  Ramees Sahlu
                </div>
              }
              style={{ color: "black" }}
            >
              <Navigation>
                <Link to="/" style={{ color: "black", fontFamily: "Lato" }}>
                  About Me
                </Link>
                <Link
                  to="/solo_projects"
                  style={{ color: "black", fontFamily: "Lato" }}
                >
                  Solo Projects
                </Link>
                <Link
                  to="/group_projects"
                  style={{ color: "black", fontFamily: "Lato" }}
                >
                  Group Projects
                </Link>
                <Link
                  to="/contact_me"
                  style={{ color: "black", fontFamily: "Lato" }}
                >
                  Contact Me
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
