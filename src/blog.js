import "./index.css";
import { useEffect } from "react";
// import { Link } from 'react-router-dom';


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

            {/* Hero Section */}
            <div className="hero">
                <h2>Hey, I'M</h2>
                <h1>J MEHITHA</h1> 
            </div>

            <div className="three">
                <p>A full stack-focused Web Developer building the full stack of Websites & Web Applications that lead to the success of the overall project.</p>
            </div>
            <div class="onee">MY EDUCATION</div>
            

           
        
            
        </div>
    );
};

export default Blog;