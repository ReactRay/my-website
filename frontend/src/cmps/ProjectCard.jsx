



export function ProjectCard({ project }) {





    return (
        <div className="project-card-container blur">
            <div className="project-card">
                <img src={project.img} alt="background" className="bg-image" />
                <div className="overlay-content">
                    <a href="#">Demo</a>
                    <a href="#">Github</a>
                </div>
            </div>

            <div className="project-text">
                <h3>{project.name}</h3>
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
            </div>
        </div>
    )


}