import { Link } from 'react-scroll';
import { showSuccessMsg } from '../services/event-bus.service';



export function Nav({ isMobile }) {



    return (

        <div className="nav">

            <ul>


                <Link onClick={() => showSuccessMsg('Welcome to Projects.')} className='nav-link' to="projects" smooth={true} duration={500}>
                    Projects
                </Link>

                {!isMobile && <>| <Link onClick={() => showSuccessMsg('Say something nice.')} className='nav-link' to="comments" smooth={true} duration={500}>
                    Surprise
                </Link></>}
                |
                <Link onClick={() => showSuccessMsg("Let's talk!")} className='nav-link' to="contact-me" smooth={true} duration={500}>
                    Contact me
                </Link>


            </ul>


        </div>
    )
}