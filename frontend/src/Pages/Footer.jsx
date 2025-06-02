import { Mail, Phone } from 'lucide-react';
import { FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ProfileImage } from '../cmps/ProfileImage';

export function Footer() {
    return (
        <footer>
            <div className="info-container fade-in-left">
                <p><Mail size={16} style={{ marginRight: '6px' }} /> raydiaz1899@gmail.com</p>
                <p><Phone size={16} style={{ marginRight: '6px' }} /> 058-770-6678</p>
            </div>

            <div className='links-container'>
                <a href="https://www.youtube.com/@agentCsharp" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
                <a href="https://www.linkedin.com/in/radwan-mansur-1368b7232/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/ReactRay" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>

            <div className='links-container hover fade-in-left'>
                <a href="https://www.youtube.com/@agentCsharp" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
                <a href="https://www.linkedin.com/in/radwan-mansur-1368b7232/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/ReactRay" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </footer>
    )
}
