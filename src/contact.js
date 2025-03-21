import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.overflow = "auto"; 
    return () => {
      document.body.style.margin = "";
      document.body.style.overflow = "";
    };
  }, []);

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      position: "relative",
      minHeight: "100vh", 
    },
    card: {
      border: "2px solid rgba(255, 255, 255, 0.6)", 
      padding: "30px",
      borderRadius: "20px",
      width: "90%",
      maxWidth: "500px",
      textAlign: "center",
      transition: "0.4s ease-in-out",
    },
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "#FFD700",
      letterSpacing: "2px",
    },
    details: {
      fontSize: "18px",
      lineHeight: "1.8",
      color: "#E0E0E0",
      marginBottom: "15px",
    },
    animatedBg: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(45deg, #6a11cb,rgb(23, 95, 221),rgb(10, 18, 254),rgb(32, 10, 161))",
      backgroundSize: "400% 400%",
      animation: "gradientBG 10s ease infinite",
      zIndex: -1,
    },
    footer: {
      position: "relative", 
      width: "100%",
      textAlign: "center",
      padding: "15px",
     
      color: "#fff",
      bottom: 0,
    },
  };

  return (
    <div>
      <div style={styles.animatedBg}></div>
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>📞 Contact Me</h2>
          <p style={styles.details}>📌 <strong>Name:</strong> Mehitha J</p>
          <p style={styles.details}>📧 <strong>Email:</strong> mehitha@example.com</p>
          <p style={styles.details}>📞 <strong>Phone:</strong> +91 98765 43210</p>
          <p style={styles.details}>🌍 <strong>Location:</strong> Chennai, India</p>
          <p style={styles.details}>
            💼 <strong>LinkedIn:</strong> 
            <a href="https://linkedin.com/in/mehitha" target="_blank" rel="noopener noreferrer" style={{ color: "#FFD700" }}>
              linkedin.com/in/mehitha
            </a>
          </p>
          <p style={styles.details}>
            💻 <strong>GitHub:</strong> 
            <a href="https://github.com/mehitha" target="_blank" rel="noopener noreferrer" style={{ color: "#FFD700" }}>
              github.com/mehitha
            </a>
          </p>
        </div>
      </div>

    
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;




