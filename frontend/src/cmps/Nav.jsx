import { Link } from 'react-scroll';
import { showSuccessMsg } from '../services/event-bus.service';
import { FolderKanban, Smile, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function Nav({ isMobile }) {
    return (
        <div className="nav">
            <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <Link
                    onClick={() => showSuccessMsg('Welcome to Projects.')}
                    className="nav-link"
                    to="projects"
                    smooth={true}
                    duration={500}
                >
                    <FolderKanban size={18} />
                    Projects
                </Link>

                <Link
                    onClick={() => showSuccessMsg('Say something nice.')}
                    className="nav-link"
                    to="comments"
                    smooth={true}
                    duration={500}
                >
                    <Smile size={18} />
                    Surprise
                </Link>

                <Link
                    onClick={() => showSuccessMsg("Let's talk!")}
                    className="nav-link"
                    to="contact-me"
                    smooth={true}
                    duration={500}
                >
                    <Mail size={18} />
                    Contact
                </Link>
            </motion.ul>
        </div>
    );
}
