import React, { useEffect } from "react";
import "./intern.css"; // External CSS for clean structure

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

const InternshipCategory = ({ category, items }) => (
  <div className="internship-category">
    <h2 className="category-title">{category}</h2>
    <div className="internships-container">
      {items.map((internship, index) => (
        <div className="internship-card" key={index}>
          <h3>{internship.title}</h3>
          <h4>{internship.company}</h4>
          <p>
            <strong>Duration:</strong> {internship.duration}
          </p>
          <p>{internship.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Internship = () => {
  useEffect(() => {
    document.querySelector(".internship-header")?.classList.add("fade-in");
  }, []);

  return (
    <div className="internship-container">
      <h1 className="internship-header">My Internships</h1>
      {internships.map((section, index) => (
        <InternshipCategory key={index} category={section.category} items={section.items} />
      ))}
    </div>
  );
};

export default Internship;
