import React from "react";

import "./intern.css"; 

const internships = [
  {
    category: "Poster Making",
    items: [
      {
        title: "Poster Making Intern",
        company: "UDDY ACADEMY",
        duration: "Nov 2024",
        description: "Designed creative posters using Canva.",
      },
    ],
  },
  {
    category: "Development",
    items: [
      {
        title: "Web Development Intern",
        company: "TAMIZHI.AL",
        duration: "Jan 2025 - Apr 2025",
        description: "Built responsive web apps using React and Node.js.",
      },
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      {
        title: "Cybersecurity Intern",
        company: "SecureNet Corp.",
        duration: "Sept 2025 - Dec 2025",
        description: "Assisted in security audits and vulnerability assessments.",
      },
    ],
  },
];

const Internship = () => {
  return (
    <div className="container">
      <h1 className="heading">My Internships</h1>
      <div className="internship-grid">
        {internships.map((section, index) => (
          <div key={index} className="internship-category">
            <h2>{section.category}</h2>
            {section.items.map((internship, idx) => (
              <div key={idx} className="internship-card">
                <h3>{internship.title}</h3>
                <h4>{internship.company}</h4>
                <p><strong>Duration:</strong> {internship.duration}</p>
                <p>{internship.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
