import { Link } from 'react-router-dom';
import "../index.css"; // Import styles if needed

const Header = () => {
    return (
        <nav className="header">
            <span className="logo">JMehitha</span>
            <ul className="nav-menu">
                <li><Link to="/mehithaj-portfolio">Home</Link></li>
                <li><Link to="/educate">Intern</Link></li>
                <li><a href="/about">Project</a></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Header;



