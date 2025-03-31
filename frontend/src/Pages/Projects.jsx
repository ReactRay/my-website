import { ProjectCard } from "../cmps/ProjectCard";
import { Element } from 'react-scroll';


export function Projects({ projects }) {


    return (

        <Element name="projects" className="projects-section">
            <h2>projects</h2>
            <div className="projects-container" >
                {projects.map((project, index) => {
                    return (

                        <ProjectCard key={project.name + index} project={project} />

                    )
                })}

            </div>

        </Element>

    )
}