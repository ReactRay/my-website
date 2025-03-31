
import { ProfileImage } from "../cmps/ProfileImage.jsx"
import myImage from "../assets/me.jpg"
import { Hero } from "./Hero.jsx"
import { Nav } from "../cmps/Nav.jsx"
import { Projects } from "./Projects.jsx"
import { Comments } from "./Comments.jsx"
import { ContactMe } from "./ContactMe.jsx"
import { Footer } from "./Footer.jsx"
import { ProjectVideo } from "../cmps/ProjectVideo.jsx"
export function Home({ projects }) {






    return (
        <div className="main-container">
            <Nav />
            <Hero />
            <Projects projects={projects} />
            <Comments />
            <ContactMe />
            <Footer />
        </div>
    )
}