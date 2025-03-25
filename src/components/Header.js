import { Link } from 'react-router-dom';
import "../header.css"; 

const Header = () => {
    return (
        <nav className="header">
            <div className="logo">JF_MEHI</div>
            <div className="menu">
            <Link to="/mehithaj-portfolio" className="menuitem">Home</Link>
            {/* <Link to="/mehithaj-portfolio" className="menuitem">Home</Link> */}

            <Link to="/educate" className="menuitem">Intern</Link>
            <Link to="/about" className="menuitem">Project</Link>
            <Link to="/contact" className="menuitem">Contact</Link>
             </div>    
           
        </nav>
    );
};

export default Header;




