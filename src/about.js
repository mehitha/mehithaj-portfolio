import { useEffect } from "react";

const projects = [
    { title: "AI Chatbot", description: "An AI-powered chatbot for automation.", link: "#" },
    { title: "Weather App", description: "A real-time weather app with API integration.", link: "#" },
    { title: "Expense Tracker", description: "A tool to manage expenses and budgets.", link: "#" },
    { title: "Fitness Tracker", description: "An app to monitor fitness activities.", link: "#" }
];

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="speech-bubble">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                    View Project
                </a>
            </div>
        </div>
    );
};

const ProjectList = () => {
    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};

const Project = () => {
    useEffect(() => {
        document.querySelector(".project-header")?.classList.add("fade-in");
    }, []);

    return (
        <div className="container">
            <style>
                {`
                    .container {
                        font-family: 'Comic Sans MS', cursive, sans-serif;
                        text-align: center;
                        background: linear-gradient(135deg, #4A90E2, #1E3A8A);
                        padding: 40px 20px;
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        color: white;
                    }

                    .project-header {
                        font-size: 2.5rem;
                        color: #FFD700;
                        text-shadow: 3px 3px 0px black;
                        animation: pop-in 1s ease-out;
                        background: white;
                        padding: 10px 20px;
                        border-radius: 15px;
                        border: 3px solid black;
                        box-shadow: 5px 5px 0px black;
                        color: #4A90E2;
                    }

                    .projects-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 30px;
                        margin-top: 20px;
                        max-width: 800px;
                    }

                    .project-card {
                        width: calc(50% - 15px);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .speech-bubble {
                        padding: 20px;
                        background: #FFD700;
                        border-radius: 20px;
                        position: relative;
                        border: 3px solid black;
                        color: black;
                        font-size: 1rem;
                        text-align: center;
                        transition: all 0.3s ease-in-out;
                    }

                    .speech-bubble:after {
                        content: "";
                        position: absolute;
                        bottom: -15px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 0;
                        height: 0;
                        border-left: 15px solid transparent;
                        border-right: 15px solid transparent;
                        border-top: 15px solid black;
                    }

                    .speech-bubble:hover {
                        transform: scale(1.1);
                        box-shadow: 8px 8px 0px black;
                    }

                    .btn {
                        display: inline-block;
                        margin-top: 10px;
                        padding: 8px 12px;
                        background: #4A90E2;
                        color: white;
                        text-decoration: none;
                        border-radius: 5px;
                        font-weight: bold;
                        border: 2px solid black;
                        box-shadow: 3px 3px 0px black;
                        transition: all 0.2s ease-in-out;
                    }

                    .btn:hover {
                        background: #1E3A8A;
                        transform: translateY(-2px);
                    }

                    @keyframes pop-in {
                        from {
                            opacity: 0;
                            transform: scale(0.8);
                        }
                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }

                    @media (max-width: 768px) {
                        .project-card {
                            width: 100%;
                        }
                    }
                `}
            </style>
            <h1 className="project-header">My Projects</h1>
            <ProjectList />
        </div>
    );
};

export default Project;
