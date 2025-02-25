import "./index.css";

const Blog = () => {
    return (
        <div className="container">
            {/* Header */}
            <nav className="header">
                <h1 className="logo">J Mehitha</h1>
                <ul className="nav-menu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="https://github.com/mehitha" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://instagram.com/mehitha_jf" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </nav>
            

            {/* Hero Section */}
            <div className="hero">
                <h2>Hey, I'M</h2>
                <h1 className="two">J MEHITHA</h1> 
                </div>
                <div className="three" >
                
                <p> A Frontend-focused Web Developer building the Frontend of Websites & Web Applications that leads to the success of the overall project.</p>
            </div>
        </div>
    );
};

export default Blog;
