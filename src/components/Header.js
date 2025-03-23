import { Link } from 'react-router-dom';
import "../index.css"; 

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



// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "../index.css"; // Keep your existing styles

// const Header = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <nav className="header">
//             <span className="logo">JMehitha</span>

//             {/* Hamburger Menu (For Mobile) */}
//             <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//                 ☰
//             </div>

//             {/* Desktop Menu */}
//             <ul className="nav-menu">
//                 <li><Link to="/mehithaj-portfolio">Home</Link></li>
//                 <li><Link to="/educate">Intern</Link></li>
//                 <li><Link to="/about">Project</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//             </ul>

//             {/* Mobile Menu */}
//             <ul className={`mobile-nav ${menuOpen ? "open" : ""}`}>
//                 <li><Link to="/mehithaj-portfolio">Home</Link></li>
//                 <li><Link to="/educate">Intern</Link></li>
//                 <li><Link to="/about">Project</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//             </ul>
//         </nav>
//     );
// };

// export default Header;
