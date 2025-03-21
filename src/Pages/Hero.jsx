import { ProfileImage } from "../cmps/ProfileImage"
import { Typewriter } from 'react-simple-typewriter'
import ParticleBackground from "../cmps/ParticleBackground.jsx"

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
                <div className="animated-text">
                    <h1>hello ,im Radwan <hr /> <Typewriter {...props} /></h1>
                    <h3>welcome to my website</h3>
                    <div className="link-box">
                        <a href="/Radwan_Mansur_Resume.pdf" download="Radwan_Mansur_CV.pdf">Download CV</a>
                        <a href="">Projects</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
