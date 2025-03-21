// import Footer from "./components/Footer";
import "./index.css";
import { useEffect } from "react";
import myPic from './images/mypic.jpeg';






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





            <div className="image-container">
                <img src={myPic} alt="My Profile" className="profile-image" />
            </div>
            <div className="hero">
                <h2>Hey, I'm</h2>
                <h1>J MEHITHA</h1>
            </div>

            <div className="three">
                <p>A full stack-focused Web Developer building the full stack of Websites & Web Applications that lead to the success of the overall project.</p>
            </div>


        </div>
    );
};

export default Blog;

