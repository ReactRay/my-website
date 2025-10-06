
import { Hero } from "./Hero.jsx"
import { Nav } from "../cmps/Nav.jsx"
import { Projects } from "./Projects.jsx"
import { Comments } from "./Comments.jsx"
import { ContactMe } from "./ContactMe.jsx"
import { Footer } from "./Footer.jsx"
export function Home({ projects, isMobile }) {






    return (
        <div className="main-container">
            <Nav isMobile={isMobile} />
            <Hero />
            <Projects projects={projects} />
            {!isMobile && <Comments />}
            <ContactMe />
            <Footer />
        </div>
    )
}