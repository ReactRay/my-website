
import { ProfileImage } from "../cmps/ProfileImage.jsx"
import myImage from "../assets/me.jpg"
import { Hero } from "./Hero.jsx"
import { Nav } from "../cmps/Nav.jsx"
export function Home() {



    return (
        <div className="main-container">
            <Nav />
            <Hero />
        </div>
    )
}