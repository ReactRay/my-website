import { motion } from "framer-motion";
import { ProfileImage } from "../cmps/ProfileImage";
import { Typewriter } from "react-simple-typewriter";
import ParticleBackground from "../cmps/ParticleBackground";
import { showSuccessMsg } from "../services/event-bus.service";
import { Link } from "react-scroll";
import { FileText, LayoutGrid } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { visitorService } from "../services/visitor.service";
export function Hero() {

    const [visits, setVisits] = useState(0);
    useEffect(() => {
        logVisits();
    }, [])

    const typeProps = {
        words: ["Developer", "Tutor", "YouTuber"],
        typeSpeed: 80,
        deleteSpeed: 50,
        loop: false,
        cursor: true,
    };


    async function logVisits() {
        try {
            const visits = await visitorService.getAllVisits();
            setVisits(visits.length);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <section className="first-section">
            <ParticleBackground color="#ffffff" />

            <div className="home-container">
                <motion.div
                    className="animated-text"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <div className="hero">
                        <h1 className="welcome fade-in-up">
                            Hello, I’m <span>Radwan</span>
                            <ProfileImage count={visits} />
                        </h1>

                        <h1>
                            <Typewriter {...typeProps} />
                        </h1>

                        <h3 className="ocean fade-in-down">welcome to my ocean</h3>
                    </div>

                    <div className="link-box">
                        <a
                            onClick={() => showSuccessMsg("Resume Downloaded!")}
                            href="/RM_CV.pdf"
                            download="RM_CV.pdf"
                        >
                            <FileText className="icon" /> Resume
                        </a>
                        <Link
                            onClick={() => showSuccessMsg("Welcome to Projects")}
                            to="projects"
                            smooth={true}
                            duration={500}
                        >
                            <LayoutGrid className="icon" /> Projects
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
