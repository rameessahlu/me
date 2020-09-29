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
                  <img src={logo} alt="logo" width="20" height="20" />
                  Ramees Sahlu
                </div>
              }
              style={{ color: "white" }}
            >
              <Navigation>
                <HashLink
                  to="/#about_me"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                >
                  <span className="hash-link-style">
                    <span className="numbering">01.</span> About Me
                  </span>
                </HashLink>
                <HashLink
                  to="/#solo_projects"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                >
                  <span className="hash-link-style">
                    <span className="numbering">02.</span> Projects
                  </span>
                </HashLink>
                <HashLink
                  to="/#contact_me"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                >
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
              style={{ color: "black", background: "#172A45" }}
            >
              <Navigation>
                <HashLink
                  to="/#about_me"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                >
                  <span className="link-style">
                    <span className="numbering">01.</span>About Me
                  </span>
                </HashLink>
                <HashLink
                  to="/#solo_projects"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                >
                  <span className="link-style">
                    <span className="numbering">02.</span>Projects
                  </span>
                </HashLink>
                <HashLink
                  to="/#contact_me"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                >
                  <span className="link-style">
                    <span className="numbering">03.</span>Contact Me
                  </span>
                </HashLink>
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
