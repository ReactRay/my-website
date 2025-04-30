import { ProfileImage } from "../cmps/ProfileImage"
import { Typewriter } from 'react-simple-typewriter'
import ParticleBackground from "../cmps/ParticleBackground.jsx"
import { showSuccessMsg } from "../services/event-bus.service.js"
import { Link } from "react-scroll"

import { FileText, LayoutGrid } from 'lucide-react'

export function Hero() {
    const props = {
        words: ['Web Developer', 'Tutor', 'YouTuber'],
        typeSpeed: 80,
        deleteSpeed: 50,
        loop: false,
        cursor: true,
    }

    return (
        <div className="first-section">
            <ParticleBackground color="" /> {/* Assuming you want particles */}
            <div className="home-container">
                <div className="animated-text" data-aos="fade-down">
                    <div className="hero">
                        <h1>
                            hello, I'm Radwan <hr />
                            <Typewriter {...props} />
                        </h1>
                        <h3>welcome to my website</h3>
                    </div>
                    <div className="link-box">
                        <a
                            onClick={() => { showSuccessMsg('Resume Downloaded!') }}
                            href="/Radwan_Mansur_FullStack_CV.pdf"
                            download="Radwan_Mansur_FullStack_CV.pdf"
                        >
                            <FileText className="icon" /> Resume
                        </a>
                        <Link
                            onClick={() => showSuccessMsg('Welcome to Projects')}
                            to="projects"
                            smooth={true}
                            duration={500}
                        >
                            <LayoutGrid className="icon" /> Projects
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
