
import { Link } from "react-router-dom"

export function ProjectCard({ project }) {




    return (
        <div className="project-card-container blur">
            <div className="project-card">
                <img src={project.img} alt="background" className="bg-image" />
                <div className="overlay-content">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>

            <div className="project-text">
                <h3 >{project.name}</h3>
                <p>{project.description}</p>
                <ul>
                    {project.technologies.map((tech) => {
                        return (
                            <li key={tech}>
                                {tech}
                            </li>
                        )
                    })}
                </ul>

                <div className="project-links-mobile">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                    <Link to={`${project.id}`}>More Details</Link>
                </div>
            </div>

        </div>
    )


}