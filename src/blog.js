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




            <div className="education-container">
                <h1 className="title">📚 My Education</h1>

            </div>
            <div className="education-item">
                <h2>BE COMPUTER SCIENCE ENGINEERING</h2>
                <h3>ANGEL COLLEGE OF ENGINEERING AND TECHNOLOGY</h3>
                <p>2022 - 2026</p>
            </div>

            <div className="education-item">
                <h2>HIGH SCHOOL</h2>
                <h3>INFANT JESUS MATRICULATION HIGHER SECONDARY SCHOOL</h3>
                <p>2020 - 2022</p>
            </div>

            <section class="skills-section">
                <h2>My Skills</h2>
                <div class="skills-container">
                    <div class="skill">
                        <p>HTML</p>
                        <div class="progress-bar">
                            <div class="progress" data-percent="90"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>CSS</p>
                        <div class="progress-bar">
                            <div class="progresss" data-percent="85"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>JavaScript</p>
                        <div class="progress-bar">
                            <div class="progresss" data-percent="75"></div>
                        </div>
                    </div>
                    <div class="skilll">
                        <p>React</p>
                        <div class="progress-bar">
                            <div class="progresssss" data-percent="70"></div>
                        </div>
                    </div>
                    <div class="skilll">
                        <p>Node</p>
                        <div class="progress-bar">
                            <div class="progressssss" data-percent="70"></div>
                        </div>
                    </div>
                    <div class="skilll">
                        <p>python</p>
                        <div class="progress-bar">
                            <div class="progressssss" data-percent="70"></div>
                        </div>
                    </div>
                </div>
            </section>




            <div className="projects-section">
                <h2>My Projects</h2>
                <div className="projects-container">
                    <div className="project-card">

                        <h3>Project 1</h3>
                        <p>A short description of your project.</p>
                        <a href="https://yourprojectlink.com" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>

                    <div className="project-card">

                        <h3>Project 2</h3>
                        <p>A short description of your project.</p>
                        <a href="https://yourprojectlink.com" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>

                    <div className="project-card">
                        {/* <img src="https://via.placeholder.com/300" alt="Project 3" /> */}
                        <h3>Project 3</h3>
                        <p>A short description of your project.</p>
                        <a href="https://yourprojectlink.com" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            </div>



            

        </div>
    );
};

export default Blog;

