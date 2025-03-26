// import "../index.css";

// const Footer = () => {
//     return (
//         <footer className="second-footer">
//             <div className="social-links">
//                 <a href="https://github.com/mehitha" target="_blank" rel="noopener noreferrer">GitHub</a>
//                 <a href="https://www.linkedin.com/in/mehitha-j-67629b252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//                 <a href="https://twitter.com/mehitha" target="_blank" rel="noopener noreferrer">Twitter</a>
//             </div>
//             <p>Designed & Developed by J Mehitha</p>
//         </footer>
//     );
// };

// export default Footer;

import "../index.css";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa"; // Importing icons

const Footer = () => {
    return (
        <footer className="second-footer">
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://github.com/mehitha" target="_blank" rel="noopener noreferrer" className="social-icon github">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/mehitha-j-67629b252" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/mehitha" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://www.youtube.com/@mehitha" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                        <FaYoutube />
                    </a>
                </div>
            </div>
            <p className="footer-text">Designed & Developed by J Mehitha</p>
        </footer>
    );
};

export default Footer;



