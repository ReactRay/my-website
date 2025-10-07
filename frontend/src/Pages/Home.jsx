import { Hero } from "./Hero"
import { Nav } from "../cmps/Nav"
import { Projects } from "./Projects"
import { Comments } from "./Comments"
import { ContactMe } from "./ContactMe"
import { Footer } from "./Footer"

export function Home({ projects, isMobile }) {
    return (
        <div className="main-container">
            <Nav isMobile={isMobile} />
            <Hero />
            <Projects projects={projects} />
            <Comments />
            <ContactMe />
            <Footer />
        </div>
    )
}
