import "./index.css";
import { useEffect } from "react";

const Blog = () => {
    useEffect(() => {
        document.querySelector(".hero")?.classList.add("animated");
        document.querySelector(".header")?.classList.add("nav-animated");
        document.querySelector(".three")?.classList.add("animated");
    }, []);

    return (
        <div className="container">
            {/* Background Animation */}
            <div className="animated-bg"></div>
            <div className="floating-circles">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>

            {/* Header */}
            <nav className="header">
                <span className="logo">JMehitha</span>
                <ul className="nav-menu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="https://github.com/mehitha" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://instagram.com/mehitha_jf" target="_blank" rel="noopener noreferrer">Insta</a></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <div className="hero">
                <h2>Hey, I'M</h2>
                <h1>J MEHITHA</h1> 
            </div>

            <div className="three">
                <p>A full stack-focused Web Developer building the fullstack of Websites & Web Applications that leads to the success of the overall project.</p>
            </div>
        </div>
    );
};

export default Blog;

