// import React, { useEffect } from "react";

// const Educate = () => {
//       useEffect(() => {
//           document.querySelector(".hero")?.classList.add("animated");
//           document.querySelector(".header")?.classList.add("nav-animated");
//           document.querySelector(".three")?.classList.add("animated");
//       }, []);
//   return (
//     <div style={styles.container}>
//        <div className="animated-bg"></div>
//             <div className="floating-circles">
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//             </div>

//       <div style={styles.card}>
//         <h1 style={styles.title}>Education</h1>
//         <div style={styles.section}>
//           <div style={{ ...styles.educationItem, borderLeft: "4px solid #3B82F6" }}>
//             <h2 style={styles.educationTitle}>Bachelor of Technology in Computer Science</h2>
//             <p style={styles.educationText}>XYZ University, 2018 - 2022</p>
//           </div>
//           <div style={{ ...styles.educationItem, borderLeft: "4px solid #10B981" }}>
//             <h2 style={styles.educationTitle}>Full-Stack Web Development Certification</h2>
//             <p style={styles.educationText}>Naan Mudhalvan Program, 2023</p>
//           </div>
//           <div style={{ ...styles.educationItem, borderLeft: "4px solid #8B5CF6" }}>
//             <h2 style={styles.educationTitle}>React JS & Frontend Development</h2>
//             <p style={styles.educationText}>Udemy | Coursera, 2024</p>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// const styles = {
//   container: {
//     minHeight: "100vh",
//     backgroundColor: "#F3F4F6",
//     padding: "2rem",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
    
//   },
//   card: {
//     maxWidth: "40rem",
//     backgroundColor: "white",
//     padding: "1.5rem",
//     borderRadius: "1rem",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//   },
//   title: {
//     fontSize: "1.875rem",
//     fontWeight: "bold",
//     color: "#1F2937",
//     marginBottom: "1rem",
//   },
//   section: {
//     display: "grid",
//     gap: "1.5rem",
//   },
//   educationItem: {
//     padding: "1rem",
//     backgroundColor: "#F9FAFB",
//     borderRadius: "0.5rem",
//   },
//   educationTitle: {
//     fontSize: "1.25rem",
//     fontWeight: "600",
//   },
//   educationText: {
//     color: "#6B7280",
//   },
  
// };

// export default Educate;



import React, { useEffect } from "react";

const educationData = [
  {
    year: "2022 - 2026",
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Anna University",
    description: "Specialized in full-stack development and AI-driven applications.",
  },
  {
    year: "2022",
    degree: "Higher Secondary Education",
    institution: "Infant Jesus Matriculation Higher Secondary School",
    description: "Majored in Mathematics, Biology, Computer Science with distinction.",
  },
  {
    year: "2020",
    degree: "Secondary Education",
    institution: "Nirmala Matriculation School",
    description: "Excelled in intelligence and participated in tech competitions.",
  },
];

const Education = () => {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `, styleSheet.cssRules.length);
  }, []);

  const styles = {
    container: {
      textAlign: "center",
      padding: "50px 20px",
      background: "linear-gradient(45deg, #6a11cb, #2575fc, #ff758c, #ff7eb3)",
      backgroundSize: "400% 400%",
      animation: "gradientBG 8s ease infinite",
      color: "white",
      minHeight: "100vh",
      position: "relative",
    },
    floatingBubble: (top, left, size) => ({
      position: "absolute",
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      background: "rgba(255, 255, 255, 0.2)",
      borderRadius: "50%",
      animation: "floatAnimation 6s infinite ease-in-out",
    }),
    title: {
      fontSize: "32px",
      marginBottom: "20px",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    timeline: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    },
    timelineItem: {
      background: "rgba(255, 255, 255, 0.1)",
      padding: "20px",
      borderRadius: "12px",
      width: "60%",
      margin: "20px 0",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s ease, background 0.3s ease",
    },
    year: {
      fontSize: "24px",
      color: "#ffeb3b",
    },
    degree: {
      fontSize: "20px",
      fontWeight: "bold",
      marginTop: "5px",
    },
    institution: {
      fontSize: "18px",
      color: "#f0f0f0",
      marginTop: "5px",
    },
    description: {
      fontSize: "16px",
      marginTop: "10px",
      color: "#ddd",
    },
  };

  return (
    <div style={styles.container}>
      {/* Floating Animated Bubbles */}
      <div style={styles.floatingBubble(10, 20, 50)} />
      <div style={styles.floatingBubble(30, 70, 80)} />
      <div style={styles.floatingBubble(50, 40, 60)} />
      <div style={styles.floatingBubble(70, 10, 100)} />
      <div style={styles.floatingBubble(90, 80, 70)} />

      <h2 style={styles.title}>My Education Journey</h2>
      <div style={styles.timeline}>
        {educationData.map((edu, index) => (
          <div key={index} style={styles.timelineItem}>
            <h3 style={styles.year}>{edu.year}</h3>
            <h4 style={styles.degree}>{edu.degree}</h4>
            <h5 style={styles.institution}>{edu.institution}</h5>
            <p style={styles.description}>{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

