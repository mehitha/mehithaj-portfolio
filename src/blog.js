import Footer from "./components/Footer";
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

            <div className="education-container">
                <h1 className="title">📚 My Education</h1>
                <div className="education-list">
                   
                    
                </div>
            </div>

            <div className="education-item">
                            <h2>BE COMPUTER SCIENCE ENGINEERING</h2>
                            <h3>ANGEL COLLEGE OF ENGINEERING AND TECHNOLOGY</h3>
                            <p>2022 - 2026</p>
                        </div>

                        <div className="education-item">
                            <h2>HIGHER SECONDARY SCHOOL</h2>
                            <h3>INFANT JESUS HIGHER SECONDARY SCHOOL</h3>
                            <p>2020 - 2022</p>
                        </div>            



        </div>
    );
};

export default Blog;