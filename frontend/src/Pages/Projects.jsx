import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProjectCard } from "../cmps/ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Element } from "react-scroll";

export function Projects({ projects }) {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <Element name="projects" className="projects-section">
            <h3 className="projects-title">Projects</h3>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                }}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div onClick={() => setSelectedProject(project)}>
                            <ProjectCard project={project} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </Element>
    );
}
