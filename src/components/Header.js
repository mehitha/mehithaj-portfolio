import { Link } from 'react-router-dom';
import "../index.css"; // Import styles if needed

const Header = () => {
    return (
        <nav className="header">
            <span className="logo">JMehitha</span>
            <ul className="nav-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/educate">Educate</Link></li>
                <li><a href="/about.html">About</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Header;
