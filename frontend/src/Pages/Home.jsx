import { useEffect } from "react"
import { Hero } from "./Hero"
import { Nav } from "../cmps/Nav"
import { Projects } from "./Projects"
import { Comments } from "./Comments"
import { ContactMe } from "./ContactMe"
import { Footer } from "./Footer"
import { visitorService } from "../services/visitor.service"
export function Home({ projects, isMobile }) {

    useEffect(() => {
        // Track visit once per user
        visitorService.trackVisit('personal')
    }, [])

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
