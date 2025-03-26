import { ProjectCard } from "../cmps/ProjectCard";
import { Element } from 'react-scroll';


export function Projects() {
    const projects = [
        {
            name: "Someday (Monday Clone)",
            description: "A task management app inspired by Monday.com. Features Kanban boards, draggable tasks, and group management.",
            technologies: ["React", "Express", "MongoDB"],
            img: "/someday.png"
        },
        {
            name: "MissBugs",
            description: "A bug tracking system where users can report, update, and manage bugs. Full CRUD with a clean UI.",
            technologies: ["React", "Express", "MongoDB"],
            img: "/bugs1.png"
        },
        {
            name: "Todos",
            description: "A simple todo app with full CRUD functionality. Built to help users stay productive and organized.",
            technologies: ["React", "Express", "MongoDB"],
            img: "/todo.png"
        }
    ];


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