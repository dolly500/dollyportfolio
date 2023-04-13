import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/gym.jpg";
import projImg2 from "../assets/img/phone.jpg";
import projImg3 from "../assets/img/todo.jpg";
import projImg4 from "../assets/img/vintage.jpg";
import projImg5 from "../assets/img/waitlist.jpg";
import projImg6 from "../assets/img/hums.jpg";
import projImg7 from "../assets/img/chsg.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Phone Commerce",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Vintage Web App",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Hums Medicals",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Chsg Website",
      description: "Design & Development",
      imgUrl: projImg7
    }
  ];

  const projects_1 = [
    {
      title: "Todo App",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Vintage Web App",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Hums Medicals",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Chsg Website",
      description: "Design & Development",
      imgUrl: projImg7
    }
  ];

  const projects_3 = [
    {
      title: "Gym App",
      description: "Design & Development",
      imgUrl: projImg1
    },
    {
      title: "Waitlist App",
      description: "Design & Development",
      imgUrl: projImg5
    },
    {
      title: "Todo App",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Vintage Web App",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Hums Medicals",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Chsg Website",
      description: "Design & Development",
      imgUrl: projImg7
    }
  ];
  

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav style={{width: '100%'}}variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">JavaScript</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">TypeScript</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">React</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" style={{color: 'white'}}>
                     <Row>
                     {
                          projects_1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                     </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                      {
                          projects_3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
