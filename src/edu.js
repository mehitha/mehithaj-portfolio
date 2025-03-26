// import React, { useEffect } from "react";
// import "./intern.css"; // External CSS for clean structure

// const internships = [
//   {
//     category: "Poster Making",
//     items: [
//       {
//         title: "Poster Making Intern",
//         company: "UDDY ACADEMY",
//         duration: "Nov 2024",
//         description: "Designed creative posters using Canva.",
//       },
//     ],
//   },
//   {
//     category: "Development",
//     items: [
//       {
//         title: "Web Development Intern",
//         company: "TAMIZHI.AL",
//         duration: "Jan 2025 - Apr 2025",
//         description: "Built responsive web apps using React and Node.js.",
//       },
//     ],
//   },
//   {
//     category: "Cybersecurity",
//     items: [
//       {
//         title: "Cybersecurity Intern",
//         company: "SecureNet Corp.",
//         duration: "Sept 2025 - Dec 2025",
//         description: "Assisted in security audits and vulnerability assessments.",
//       },
//     ],
//   },
// ];

// const InternshipCategory = ({ category, items }) => (
//   <div className="internship-category">
//     <h2 className="category-title">{category}</h2>
//     <div className="internships-container">
//       {items.map((internship, index) => (
//         <div className="internship-card" key={index}>
//           <h3>{internship.title}</h3>
//           <h4>{internship.company}</h4>
//           <p>
//             <strong>Duration:</strong> {internship.duration}
//           </p>
//           <p>{internship.description}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const Internship = () => {
//   useEffect(() => {
//     document.querySelector(".internship-header")?.classList.add("fade-in");
//   }, []);

//   return (
//     <div className="internship-container">
//       <h1 className="internship-header">My Internships</h1>
//       {internships.map((section, index) => (
//         <InternshipCategory key={index} category={section.category} items={section.items} />
//       ))}
//     </div>
//   );
// };

// export default Internship;











import React, { useEffect } from "react";

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

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "#f4f4f4",
    minHeight: "100vh",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  categoryContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    width: "90%",
    maxWidth: "1200px",
  },
  category: {
    background: "white",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
  },
  card: {
    background: "#fff",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px 0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
  },
  cardHover: {
    transform: "scale(1.05)",
  },
  '@media (max-width: 768px)': {
    categoryContainer: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
};

const InternshipCategory = ({ category, items }) => (
  <div style={styles.category}>
    <h2>{category}</h2>
    {items.map((internship, index) => (
      <div
        key={index}
        style={styles.card}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h3>{internship.title}</h3>
        <h4>{internship.company}</h4>
        <p>
          <strong>Duration:</strong> {internship.duration}
        </p>
        <p>{internship.description}</p>
      </div>
    ))}
  </div>
);

const Internship = () => {
  useEffect(() => {
    document.querySelector(".internship-header")?.classList.add("fade-in");
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header} className="internship-header">
        My Internships
      </h1>
      <div style={styles.categoryContainer}>
        {internships.map((section, index) => (
          <InternshipCategory key={index} category={section.category} items={section.items} />
        ))}
      </div>
    </div>
  );
};

export default Internship;






