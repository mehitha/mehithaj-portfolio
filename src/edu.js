import "./intern.css";
import { useEffect } from "react";

const internships = [
    {
        category: "Poster",
        items: [
            {
                title: "Poster making Intern",
                company: "UDDY ACADEMY",
                duration: "Nov 2024",
                description: "Developed some creative poster using Canvas"
            }
        ]
    },
    {
        category: "Development",
        items: [
            {
                title: "Web Development",
                company: "TAMIZHI.AL",
                duration: "Jan 2025 - Apr 2025",
                description: "Developed responsive web applications using React and Node.js"
            }
        ]
    },
    {
        category: "Cybersecurity",
        items: [
            {
                title: "Cybersecurity Intern",
                company: "SecureNet Corp.",
                duration: "Sept 2025 - Dec 2025",
                description: "Assisted in vulnerability assessments and security audits."
            }
        ]
    }
];

const InternshipCategory = ({ category, items }) => {
    return (
        <div className="internship-category">
            <h2>{category}</h2>
            <div className="internships-container">
                {items.map((internship, index) => (
                    <div className="internship-card" key={index}>
                        <h3>{internship.title}</h3>
                        <h4>{internship.company}</h4>
                        <p><strong>Duration:</strong> {internship.duration}</p>
                        <p>{internship.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Internship = () => {
    useEffect(() => {
        document.querySelector(".internship-header")?.classList.add("fade-in");
    }, []);

    return (
        <div className="container">
            {/* Animated Background with Two Shades */}
            <div className="animated-bg">
                <div className="gradient-overlay"></div>
            </div>
            
            <h1 className="internship-header">My Internships</h1>
            {internships.map((section, index) => (
                <InternshipCategory key={index} category={section.category} items={section.items} />
            ))}
        </div>
    );
};

export default Internship;