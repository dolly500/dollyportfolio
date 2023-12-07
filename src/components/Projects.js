import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/gym.jpg";
import projImg3 from "../assets/img/todo.jpg";
import projImg4 from "../assets/img/vintage.jpg";
import projImg5 from "../assets/img/waitlist.jpg";
import projImg6 from "../assets/img/hums.jpg";
import projImg7 from "../assets/img/chsg.jpg";
import projImg9 from "../assets/img/Screenshot 2023-12-07 181909.jpg"
import projImg10 from "../assets/img/eduglobal.jpg"
import projImg11 from "../assets/img/dispatch.jpg"
import projImg12 from "../assets/img/blackgat.jpg"
import projImg13 from "../assets/img/weather.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "EduglobalBank Web App",
      description: "Design & Development",
      imgUrl: projImg10,
      githubLink: "https://github.com/dolly500/EduGlobalBank", 
      vercelLink: "http://eduglobalbank.com/" ,
    }, 
    {
      title: "DispatchCruise Web App",
      description: "Design & Development",
      imgUrl: projImg11,
      githubLink: "https://github.com/dolly500/Dispatch-Cruise-Web-App", 
      vercelLink: "https://dispatch-cruise-web-app.onrender.com/" ,
    }, 
    {
      title: "Vintage Web App",
      description: "Design & Development",
      imgUrl: projImg4,
      githubLink: "https://github.com/dolly500/vintagetech", 
      vercelLink: "https://vintagetechcommerce.netlify.app/" ,
    },
    {
      title: "Nerdburg World Weather Web App",
      description: "Design & Development",
      imgUrl: projImg13,
      githubLink: "https://github.com/dolly500/Nerdbug-Assesment", 
      vercelLink: "https://nerdbug-world-weather-app.vercel.app/",
    }, 
    {
      title: "Recipe Web App",
      description: "Design & Development",
      imgUrl: projImg9,
      githubLink: "https://github.com/dolly500/recipe-app-with-react", 
      vercelLink: "https://react-recipey.vercel.app/" ,
    },
    {
      title: "Hums Medicals Web App",
      description: "Design & Development",
      imgUrl: projImg6,
      githubLink: "https://github.com/dolly500/HumsMedicals", 
      vercelLink: "https://hums-medicals.vercel.app/" ,
    },
    {
      title: "Chsg Web App",
      description: "Design & Development",
      imgUrl: projImg7,
      githubLink: "https://github.com/dolly500/chsg-new-website", 
      vercelLink: "https://chsginc.vercel.app/" ,
    },
    {
      title: "Blackgatstories Web App",
      description: "Design & Development",
      imgUrl: projImg12,
      githubLink: "https://github.com/dolly500/Blackgatstories", 
      vercelLink: "https://blackgatstories.vercel.app/" ,
    }
  ];

  const projects_1 = [
    {
      title: "Todo Web App",
      description: "Design & Development",
      imgUrl: projImg3,
      githubLink: "https://github.com/dolly500/To-do-App", 
      vercelLink: "https://todolistinreact.netlify.com/" ,
    },
    {
      title: "Vintage Web App",
      description: "Design & Development",
      imgUrl: projImg4,
      githubLink: "https://github.com/dolly500/vintagetech", 
      vercelLink: "https://vintagetechcommerce.netlify.app/" ,
    },
    {
      title: "Hums Medicals Web App",
      description: "Design & Development",
      imgUrl: projImg6,
      githubLink: "https://github.com/dolly500/HumsMedicals", 
      vercelLink: "https://hums-medicals.vercel.app/" ,
    },
    {
      title: "Chsg Web App",
      description: "Design & Development",
      imgUrl: projImg7,
      githubLink: "https://github.com/dolly500/chsg-new-website", 
      vercelLink: "https://chsginc.vercel.app/" ,
    },
  ];

  const projects_3 = [
    {
      title: "Gym Web App",
      description: "Design & Development",
      imgUrl: projImg1,
      githubLink: "https://github.com/dolly500/Gym-Web-App", 
      vercelLink: "https://gym-web-app-nine.vercel.app/" ,
    },
    {
      title: "Waitlist Web App",
      description: "Design & Development",
      imgUrl: projImg5,
      githubLink: "https://github.com/dolly500/datasolve-waitlist", 
      vercelLink: "https://datasolve-waitlist.vercel.app/",
    },
    {
      title: "EduglobalBank Web App",
      description: "Design & Development",
      imgUrl: projImg10,
      githubLink: "https://github.com/dolly500/EduGlobalBank", 
      vercelLink: "http://eduglobalbank.com/" ,
    }, 
    {
      title: "DispatchCruise Web App",
      description: "Design & Development",
      imgUrl: projImg11,
      githubLink: "https://github.com/dolly500/Dispatch-Cruise-Web-App", 
      vercelLink: "https://dispatch-cruise-web-app.onrender.com/" ,
    },
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
                      <Nav.Link eventKey="first">React</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">TypeScript</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">JavaScript</Nav.Link>
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
      <img className="background-image-right" src={colorSharp2} alt=''/>
    </section>
  )
}
