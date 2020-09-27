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
import "./styles/projects.css";
import le_patrika_screenshot from "../assets/le_patrika.jpg";

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
            src: "http://www.getmdl.io/assets/demos/welcome_card.jpg",
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
      ],
      name_to_ico: {
        play_store: ["fa fa-play", "Play Store"],
        github: ["fa fa-github-square", "Git Hub"],
      },
    };
  }

  handleBtnClick = (_link) => {
    window.open(_link, "_blank");
    return true;
  };

  genarateProjectInfo = (proj_list) => {
    return (
      <div className="project-grid">
        {this.state.solo_projects.map((projs) => {
          return (
            <React.Fragment key={projs._id}>
              {proj_list.includes(projs._id) && (
                <Card
                  shadow={5}
                  style={{
                    minWidth: "20em",
                    marginLeft: "3em",
                    marginBottom: "3em",
                  }}
                >
                  {projs.content.type === "img" ? (
                    <CardTitle
                      style={{
                        color: "#fff",
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
                    }}
                  >
                    {projs.desc}
                  </CardText>
                  <CardText> Stack: {projs.tech_stack}</CardText>
                  {Object.keys(projs.proj_links).map((key, value) => {
                    return (
                      <CardActions border key={projs._id}>
                        <Button
                          onClick={() => {
                            this.handleBtnClick(projs.proj_links[key]);
                          }}
                        >
                          <i
                            className={this.state.name_to_ico[key][0]}
                            aria-hidden="true"
                          ></i>
                          {" " + this.state.name_to_ico[key][1]}
                        </Button>
                      </CardActions>
                    );
                  })}
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
    if (this.state.activeTab === 0) {
      var proj_list = [0, 1, 2];
      return this.genarateProjectInfo(proj_list);
    } else if (this.state.activeTab === 1) {
      proj_list = [0];
      return this.genarateProjectInfo(proj_list);
    } else if (this.state.activeTab === 2) {
      proj_list = [2];
      return this.genarateProjectInfo(proj_list);
    } else if (this.state.activeTab === 3) {
      proj_list = [1];
      return this.genarateProjectInfo(proj_list);
    }
  };

  render() {
    return (
      <div className="category" id={"solo_projects"}>
        <h1
          style={{
            textAlign: "center",
            margin: "0 auto",
            justifyContent: "center",
            marginBottom: "1em",
          }}
          className="proj-heading"
        >
          <span style={{ fontFamily: "Lato" }}>
            <i>Projects</i>
          </span>
        </h1>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
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
        <section>
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
    );
  }
}

export default SoloProjects;
