import { Github, ExternalLink } from 'lucide-react';
import { TechIcon } from './TechIcon';

export function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img src={project.img} alt={project.name} className="project-img" />

            <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <ul className="tech-list">
                    {project.technologies.map((tech) => (
                        <li key={tech} className="tech-item">
                            <TechIcon tech={tech} />
                            <span>{tech}</span>
                        </li>
                    ))}
                </ul>

                <div className="links">
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} /> Demo
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" >
                            <Github size={16} /> GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
