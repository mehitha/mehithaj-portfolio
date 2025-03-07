import React, { useEffect } from "react";

const Educate = () => {
      useEffect(() => {
          document.querySelector(".hero")?.classList.add("animated");
          document.querySelector(".header")?.classList.add("nav-animated");
          document.querySelector(".three")?.classList.add("animated");
      }, []);
  return (
    <div style={styles.container}>
       <div className="animated-bg"></div>
            <div className="floating-circles">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>

      <div style={styles.card}>
        <h1 style={styles.title}>Education</h1>
        <div style={styles.section}>
          <div style={{ ...styles.educationItem, borderLeft: "4px solid #3B82F6" }}>
            <h2 style={styles.educationTitle}>Bachelor of Technology in Computer Science</h2>
            <p style={styles.educationText}>XYZ University, 2018 - 2022</p>
          </div>
          <div style={{ ...styles.educationItem, borderLeft: "4px solid #10B981" }}>
            <h2 style={styles.educationTitle}>Full-Stack Web Development Certification</h2>
            <p style={styles.educationText}>Naan Mudhalvan Program, 2023</p>
          </div>
          <div style={{ ...styles.educationItem, borderLeft: "4px solid #8B5CF6" }}>
            <h2 style={styles.educationTitle}>React JS & Frontend Development</h2>
            <p style={styles.educationText}>Udemy | Coursera, 2024</p>
          </div>
        </div>
      </div>
    </div>
    // <div>Education Page</div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#F3F4F6",
    padding: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
  card: {
    maxWidth: "40rem",
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: "1rem",
  },
  section: {
    display: "grid",
    gap: "1.5rem",
  },
  educationItem: {
    padding: "1rem",
    backgroundColor: "#F9FAFB",
    borderRadius: "0.5rem",
  },
  educationTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
  },
  educationText: {
    color: "#6B7280",
  },
  
};

export default Educate;
