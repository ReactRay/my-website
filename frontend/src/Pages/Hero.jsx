import { ProfileImage } from "../cmps/ProfileImage"
import { Typewriter } from 'react-simple-typewriter'
import ParticleBackground from "../cmps/ParticleBackground.jsx"
import { showSuccessMsg } from "../services/event-bus.service.js"
import { Link } from "react-scroll"
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
            <div className="home-container">
                <div className="animated-text" data-aos="fade-down">
                    <h1>hello ,im Radwan <hr /> <Typewriter {...props} /></h1>
                    <h3>welcome to my website</h3>
                    <div className="link-box">
                        <a href="/Radwan_Mansur_CV.pdf" download="Radwan_Mansur_CV.pdf">Download CV</a>
                        <Link to="projects">Projects</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
