import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMenu,
  IconButton,
  Button,
} from "react-mdl";
import "../styles/projects.css";
import le_patrika_screenshot from "../assets/le_patrika.jpg";
import tax_block from "../assets/tax_block.png";

class SoloProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      solo_projects: [
        {
          _id: 0,
          content: {
            src: le_patrika_screenshot,
            type: "img",
          },
          name: "Le Patrika",
          project_type: "app",
          desc:
            "Le Patrika is a beautifully simple, free todo list and journal app.",
          tech_stack: "React Native, Realm",
          proj_links: { github: "https://github.com/rameessahlu/le-patrika" },
        },

        {
          _id: 1,
          content: {
            src: "https://www.youtube.com/embed/WaDEVpQwrqA",
            type: "vid",
          },
          name: "Pet Droplets",
          project_type: "game",
          tech_stack: "C#, Unity Engine",
          desc:
            "A casual game developed for the mobile platform as part of a contribution to National Immunization Awareness Month (NIAM). The game intends to create awareness among children on the importance of vaccines and how it protects against serious life-threatening disease. ",
          proj_links: {
            play_store:
              "https://play.google.com/store/apps/details?id=com.diloopstudios.DisinfectantTunnelForPets",
          },
        },
        {
          _id: 2,
          content: {
            src:
              "https://static3.depositphotos.com/1000635/120/i/450/depositphotos_1208368-stock-photo-white-paper-seamless-background.jpg",
            type: "img",
          },
          name: "Context based Search Engine",
          project_type: "web",
          desc:
            " A context based search engine which can accept query from user and search the document of all types from a shared location and provide the closest description with highest matching values",
          tech_stack: "Python flask, ElasticSearch, jQuery, CSS",
          proj_links: {
            github: "https://github.com/rameessahlu/ContextualSearchEngine",
          },
        },
        {
          _id: 3,
          content: {
            src: tax_block,
            type: "img",
          },
          name: "Loan Management System",
          project_type: "web",
          desc:
            "A simple loan management web application. It allows users to signup, login, create and view a list of loans. Created as a part of a recruitment process and data are are not persisted.",
          tech_stack: "React, react-mdl, Redux",
          proj_links: {
            github: "https://github.com/rameessahlu/me",
            web_site: "https://xenodochial-knuth-9c81b0.netlify.app",
          },
        },
      ],
      name_to_ico: {
        play_store: ["fa fa-play", "Play Store"],
        github: ["fa fa-github-square", "Git Hub"],
        web_site: ["fa fa-external-link-square", "DEMO"],
      },
    };
  }

  handleBtnClick = (_link) => {
    window.open(_link, "_blank");
    return true;
  };

  genarateProjectInfo = (proj_list) => {
    return (
      <div className="project-grid" id="project-grid">
        {this.state.solo_projects.map((projs) => {
          return (
            <React.Fragment key={projs._id}>
              {proj_list.includes(projs._id) && (
                <Card
                  shadow={5}
                  style={{
                    maxWidth: "18em",
                    marginLeft: "3em",
                    marginBottom: "3em",
                    background: "#AF5B5B",
                  }}
                  data-aos="fade-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  data-aos-anchor="project-grid"
                  data-aos-delay="50"
                >
                  {projs.content.type === "img" ? (
                    <CardTitle
                      style={{
                        color: "#0a192f",
                        height: "10em",
                        background: `url(${projs.content.src})  center / cover`,
                      }}
                    >
                      {projs.name}
                    </CardTitle>
                  ) : (
                    <iframe
                      height="157em"
                      src={projs.content.src}
                      title={projs.name}
                    ></iframe>
                  )}
                  <CardText
                    style={{
                      height: "8em",
                      color: "#ccd6f6",
                    }}
                  >
                    {projs.desc}
                  </CardText>
                  <CardText style={{ color: "#ccd6f6" }}>
                    {" "}
                    Stack: {projs.tech_stack}
                  </CardText>

                  <CardActions
                    border
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {Object.keys(projs.proj_links).map((key, value) => {
                      return (
                        <Button
                          onClick={() => {
                            this.handleBtnClick(projs.proj_links[key]);
                          }}
                          style={{ color: "#ccd6f6" }}
                          key={key}
                        >
                          <i
                            className={this.state.name_to_ico[key][0]}
                            aria-hidden="true"
                            style={{ color: "#ccd6f6" }}
                          ></i>
                          {" " + this.state.name_to_ico[key][1]}
                        </Button>
                      );
                    })}
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  toggleProjects = () => {
    let proj_list = [];
    if (this.state.activeTab === 0) {
      proj_list = [0, 1, 2, 3];
    } else if (this.state.activeTab === 1) {
      proj_list = [0];
    } else if (this.state.activeTab === 2) {
      proj_list = [2, 3];
    } else if (this.state.activeTab === 3) {
      proj_list = [1];
    }
    return this.genarateProjectInfo(proj_list);
  };

  render() {
    return (
      <React.Fragment>
        <div className="category">
          <h3
            style={{
              textAlign: "left",
              margin: "0 auto",
              justifyContent: "center",
              marginBottom: "1em",
              fontFamily: "Lato",
              width: "88%",
            }}
            className="proj-heading intro"
          >
            <span className="numbering">02.</span>Projects
          </h3>
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
            style={{ width: "75%", margin: "auto" }}
          >
            <Tab>
              <span className="tab">All</span>
            </Tab>
            <Tab>
              <span className="tab">Mobile</span>
            </Tab>
            <Tab>
              <span className="tab">Web</span>
            </Tab>
            <Tab>
              <span className="tab">Games</span>
            </Tab>
          </Tabs>
          <section id={"solo_projects"}>
            <div
              style={{ width: "95%", margin: "auto" }}
              className="project-grid-div"
            >
              <Grid>
                <Cell col={12}>{this.toggleProjects()}</Cell>
              </Grid>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default SoloProjects;
