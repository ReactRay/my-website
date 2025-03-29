import { Link } from 'react-scroll';



export function Nav() {



    return (

        <div className="nav">

            <ul>


                <Link className='nav-link' to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
                |
                <Link className='nav-link' to="comments" smooth={true} duration={500}>
                    Surprise
                </Link>
                |
                <Link className='nav-link' to="contact-me" smooth={true} duration={500}>
                    Contact me
                </Link>


            </ul>


        </div>
    )
}