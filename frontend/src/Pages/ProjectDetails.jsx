import { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectVideo } from "../cmps/ProjectVideo";

export function ProjectDetails({ project }) {
    const [previewImg, setPreviewImg] = useState(null);

    return (
        <div className="project-details">
            <h2>{project.name}</h2>
            <Link to="/">go back</Link>

            <div className="container-details">
                <div className="img1">
                    <img src={project.imgArr[0]} alt="img1" onClick={() => setPreviewImg(project.imgArr[0])} />
                </div>
                <div className="img2">
                    <img src={project.imgArr[1]} alt="img2" onClick={() => setPreviewImg(project.imgArr[1])} />
                </div>
                <div className="img3">
                    <img src={project.imgArr[2]} alt="img3" onClick={() => setPreviewImg(project.imgArr[2])} />
                </div>
                <div className="Video">
                    {project.videoId && <ProjectVideo video={project.videoId} />}
                    {project.video && (
                        <video controls width="100%">
                            <source src={project.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}

                </div>
                <div className="details">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            </div>

            {previewImg && (
                <div className="img-modal" onClick={() => setPreviewImg(null)}>
                    <img src={previewImg} alt="Preview" />
                </div>
            )}
        </div>
    );
}
