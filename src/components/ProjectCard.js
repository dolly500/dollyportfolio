import { Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import icons from react-icons library

export const ProjectCard = ({ title, description, imgUrl, githubLink, vercelLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="project-links">
            {/* GitHub link */}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub className="github-icon" style={{color: 'black', marginRight: '10px', fontSize: '30px'}} />
              </a>
            )}

            {/* Vercel link */}
            {vercelLink && (
              <a href={vercelLink} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="vercel-icon" style={{color: 'black', marginRight: '8px', fontSize: '30px'}}/>
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
