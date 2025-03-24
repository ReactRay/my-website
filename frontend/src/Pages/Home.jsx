
import { ProfileImage } from "../cmps/ProfileImage.jsx"
import myImage from "../assets/me.jpg"
import { Hero } from "./Hero.jsx"
import { Nav } from "../cmps/Nav.jsx"
import { Projects } from "./Projects.jsx"
import { Comments } from "./Comments.jsx"
import ParticleBackground from "../cmps/ParticleBackground.jsx"
export function Home() {



    return (
        <div className="main-container">
            <ParticleBackground />
            <h1>githubn</h1>
            <Nav />

            <Hero />
            <Projects />
            <Comments />
        </div>
    )
}