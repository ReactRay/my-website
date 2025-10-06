import { Link } from 'react-scroll';
import { showSuccessMsg } from '../services/event-bus.service';
import { FolderKanban, Smile, Mail } from 'lucide-react';

export function Nav({ isMobile }) {
    return (
        <div className="nav">

            <ul className="fade-in-right">

                <Link
                    onClick={() => showSuccessMsg('Welcome to Projects.')}
                    className="nav-link"
                    to="projects"
                    smooth={true}
                    duration={500}
                >
                    <FolderKanban size={18} style={{ marginRight: '6px' }} />
                    Projects
                </Link>

                {!isMobile && (
                    <>
                        |{' '}
                        <Link
                            onClick={() => showSuccessMsg('Say something nice.')}
                            className="nav-link"
                            to="comments"
                            smooth={true}
                            duration={500}
                        >
                            <Smile size={18} style={{ marginRight: '6px' }} />
                            Surprise
                        </Link>
                    </>
                )}

                |{' '}
                <Link
                    onClick={() => showSuccessMsg("Let's talk!")}
                    className="nav-link"
                    to="contact-me"
                    smooth={true}
                    duration={500}
                >
                    <Mail size={18} style={{ marginRight: '6px' }} />
                    Contact
                </Link>
            </ul>
        </div>
    );
}
