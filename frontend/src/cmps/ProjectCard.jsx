import { Link, useNavigate } from "react-router-dom"
import { Github, ExternalLink } from 'lucide-react'

export function ProjectCard({ project }) {
    const navigate = useNavigate()

    return (
        <div className="project-card-container blur">
            <div className="project-card" onClick={() => { navigate(`${project.id}`) }}>
                <img src={project.img} alt="background" className="bg-image" />
            </div>

            <div className="project-text">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul>
                    {project.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>

                <div className="project-links-mobile">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Demo <ExternalLink className="icon" />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        Github <Github className="icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}
