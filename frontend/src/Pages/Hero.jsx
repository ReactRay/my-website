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
                <div className="animated-text" >
                    <div className="hero">
                        <h1 className="welcome fade-in-up">
                            Hello, I'm Radwan
                            <h1 className="fade-in-down"><Typewriter {...props} /> </h1>
                        </h1>
                        <h3 className="ocean fade-in-down">welcome to my ocean</h3>
                    </div>
                    <div className="link-box ">
                        <a
                            onClick={() => { showSuccessMsg('Resume Downloaded!') }}
                            href="/RM_CV.pdf"
                            download="RM_CV.pdf"
                            className="fade-in-left"
                        >
                            <FileText className="icon" /> Resume
                        </a>
                        <Link
                            onClick={() => showSuccessMsg('Welcome to Projects')}
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="fade-in-right"
                        >
                            <LayoutGrid className="icon" /> Projects
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
