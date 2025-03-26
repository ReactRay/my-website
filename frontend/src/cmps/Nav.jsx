import { Link } from 'react-scroll';



export function Nav() {



    return (

        <div className="nav">

            <ul>


                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
                |
                <Link to="comments" smooth={true} duration={500}>
                    Surprise
                </Link>
                |
                <Link to="contact-me" smooth={true} duration={500}>
                    Contact me
                </Link>


            </ul>


        </div>
    )
}