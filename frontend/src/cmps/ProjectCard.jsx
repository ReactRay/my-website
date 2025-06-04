import { Link, useNavigate } from "react-router-dom";
import { Github, ExternalLink } from 'lucide-react';
import { TechIcon } from "./TechIcon";

export function ProjectCard({ project }) {
    const navigate = useNavigate();

    return (
        <div className="project-card-container blur">
            <div className="project-card" onClick={() => navigate(`${project.id}`)}>
                <img src={project.img} alt="background" className="bg-image" />
            </div>

            <div className="project-text">
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <ul className="tech-stack-list">
                    {project.technologies.map((tech) => (
                        <li key={tech} className="tech-item">
                            <TechIcon tech={tech} />
                            <span style={{ marginLeft: '6px' }}>{tech}</span>
                        </li>
                    ))}
                </ul>

                <div className="project-links-mobile">
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Demo <ExternalLink className="icon" />
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            Github <Github className="icon" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
