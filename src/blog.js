
import "./index.css";
import { useEffect } from "react";
import myPic from './images/mypic.jpeg';
import htmlLogo from "./images/html.png";  // Add your skill logos inside /images folder
import cssLogo from "./images/css.png";
import jsLogo from "./images/javascript.png";
import reactLogo from "./images/react.png";
import nodeLogo from "./images/node.png";








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

            <section className="education">
    <h2>Education</h2>
    <div className="bubble-container">
        <div className="bubble">
            <div className="bubble-content">
                <h3>B.E in Computer Science</h3>
                <p>ANNA University<br />2022 - 2026</p>
            </div>
        </div>

        <div className="bubble">
            <div className="bubble-content">
                <h3>Higher Secondary Education</h3>
                <p>Infant Jesus Matriculation School<br />2018 - 2020</p>
            </div>
        </div>

        <div className="bubble">
            <div className="bubble-content">
                <h3>Secondary Education</h3>
                <p>Nirmala Matriculation School<br />2016 - 2018</p>
            </div>
        </div>
    </div>
</section>


<div className="skills">
                <h2>My Skills</h2>
                <div className="skills-list">
                    <div className="skill"><img src={htmlLogo} alt="HTML" /><p>HTML</p></div>
                    <div className="skill"><img src={cssLogo} alt="CSS" /><p>CSS</p></div>
                    <div className="skill"><img src={jsLogo} alt="JavaScript" /><p>JavaScript</p></div>
                    <div className="skill"><img src={reactLogo} alt="React" /><p>React</p></div>
                    <div className="skill"><img src={nodeLogo} alt="Node.js" /><p>Node.js</p></div>
                </div>
            </div>



        </div>
    );
};

export default Blog;

