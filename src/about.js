import "./project.css";
import { useEffect } from "react";

const projects = [
    {
        title: "AI Chatbot",
        description: "An AI-powered chatbot that helps users with inquiries and automation.",
        link: "#",
    },
    {
        title: "Weather App",
        description: "A real-time weather forecasting app using API integration.",
        link: "#",
    },
    {
        title: "Expense Tracker",
        description: "A financial tracking tool to manage expenses and budgets.",
        link: "#",
    },
    {
      title: "Expense Tracker",
      description: "A financial tracking tool to manage expenses and budgets.",
      link: "#",
    },
    {
      title: "Expense Tracker",
      description: "A financial tracking tool to manage expenses and budgets.",
      link: "#",
    },
    {
        title: "Fitness Tracker",
        description: "An application to monitor fitness activities and health goals.",
        link: "#",
    }
];

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
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
            <div className="animated-bg">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            
            <h1 className="project-header">My Projects</h1>
            {/* Added ProjectList here */}
            <ProjectList />
        </div>
    );
};

export default Project;
