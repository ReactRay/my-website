import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectVideo } from "../cmps/ProjectVideo";
import { X } from "lucide-react";

export function ProjectModal({ project, onClose }) {
    const [zoomImg, setZoomImg] = useState(null);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                zoomImg ? setZoomImg(null) : onClose();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose, zoomImg]);

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="modal-overlay"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <motion.div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <button className="close-btn" onClick={onClose}>
                            <X size={22} />
                        </button>

                        <div className="modal-header">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </div>

                        <div className="modal-media">
                            {project.videoId && <ProjectVideo video={project.videoId} />}
                            {project.video && (
                                <video controls width="100%">
                                    <source src={project.video} type="video/mp4" />
                                </video>
                            )}
                        </div>

                        <div className="modal-images">
                            {project.imgArr.map((img, idx) => (
                                <motion.img
                                    key={idx}
                                    src={img}
                                    alt={`${project.name}-${idx}`}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setZoomImg(img)}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Fullscreen zoom overlay */}
                    {/* Fullscreen zoom overlay */}
                    <AnimatePresence>
                        {zoomImg && (
                            <motion.div
                                className="zoom-overlay"
                                onClick={(e) => {
                                    e.stopPropagation(); // 🧠 Stop bubbling to modal overlay
                                    setZoomImg(null);
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                <motion.img
                                    src={zoomImg}
                                    alt="Zoomed"
                                    className="zoomed-img"
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={(e) => e.stopPropagation()} // 🧠 Prevent image click from closing parent
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
