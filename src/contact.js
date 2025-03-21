// import React, { useEffect } from "react";

// const Contact = () => {
//   useEffect(() => {
//     document.querySelector(".header")?.classList.add("nav-animated");
//   }, []);

//   const styles = {
//     pageWrapper: {
//       position: "relative",
//       width: "100%",
//       height: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       flexDirection: "column",
//       textAlign: "center",
//       background: "#0f0f0f",
//       color: "#fff",
//       overflow: "hidden",
//     },
//     animatedBg: {
//       position: "fixed",
//       top: "0",
//       left: "0",
//       width: "100%",
//       height: "100%",
//       background: "linear-gradient(45deg, #000428, #004e92)",
//       backgroundSize: "400% 400%",
//       animation: "gradientBG 10s ease infinite",
//       zIndex: "-1",
//     },
//     floatingBubbles: {
//       position: "fixed",
//       width: "100%",
//       height: "100%",
//       overflow: "hidden",
//       top: "0",
//       left: "0",
//       zIndex: "0",
//     },
//     bubble: {
//       position: "absolute",
//       width: "70px",
//       height: "70px",
//       background: "rgba(0, 255, 255, 0.5)",
//       borderRadius: "50%",
//       boxShadow: "0 0 15px rgba(0, 255, 255, 0.8)",
//       animation: "floatBubble 8s infinite ease-in-out",
//     },
//     contactBox: {
//       background: "rgba(255, 255, 255, 0.15)",
//       padding: "40px",
//       borderRadius: "15px",
//       boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5)",
//       backdropFilter: "blur(12px)",
//       WebkitBackdropFilter: "blur(12px)",
//       maxWidth: "450px",
//       width: "90%",
//       transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
//       border: "1px solid rgba(255, 255, 255, 0.2)",
//     },
//     heading: {
//       fontSize: "28px",
//       fontWeight: "bold",
//       marginBottom: "20px",
//       textTransform: "uppercase",
//       letterSpacing: "2px",
//       color: "#00eaff",
//     },
//     details: {
//       fontSize: "18px",
//       marginBottom: "12px",
//       color: "#ddd",
//       transition: "color 0.3s",
//     },
//     linkStyle: {
//       color: "#ff4081",
//       textDecoration: "none",
//       fontWeight: "bold",
//     },
//   };

//   return (
//     <div style={styles.pageWrapper}>
//       {/* Animated Background */}
//       <div style={styles.animatedBg}></div>

//       {/* Floating Bubbles */}
//       <div style={styles.floatingBubbles}>
//         <div style={{ ...styles.bubble, top: "10%", left: "15%" }}></div>
//         <div style={{ ...styles.bubble, top: "30%", left: "50%", width: "90px", height: "90px" }}></div>
//         <div style={{ ...styles.bubble, top: "70%", left: "80%" }}></div>
//         <div style={{ ...styles.bubble, top: "45%", left: "35%", width: "110px", height: "110px" }}></div>
//       </div>

//       {/* Contact Information Box */}
//       <div
//         style={styles.contactBox}
//         onMouseOver={(e) => {
//           e.currentTarget.style.transform = "scale(1.05)";
//           e.currentTarget.style.boxShadow = "0 15px 45px rgba(0, 255, 255, 0.4)";
//         }}
//         onMouseOut={(e) => {
//           e.currentTarget.style.transform = "scale(1)";
//           e.currentTarget.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.5)";
//         }}
//       >
//         <h2 style={styles.heading}>Let's Connect</h2>
//         <p style={styles.details}>📍 Location: Chennai, India</p>
//         <p style={styles.details}>
//           📧 Email: <a href="mailto:mehitha@example.com" style={styles.linkStyle}>mehitha@example.com</a>
//         </p>
//         <p style={styles.details}>📱 Phone: +91 98765 43210</p>
//         <p style={styles.details}>
//           🔗 LinkedIn: <a href="https://linkedin.com/in/mehitha" style={styles.linkStyle}>linkedin.com/in/mehitha</a>
//         </p>
//       </div>

//       {/* CSS Animations */}
//       <style>
//         {`
//           @keyframes gradientBG {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }

//           @keyframes floatBubble {
//             0% { transform: translateY(0px); opacity: 0.6; }
//             50% { transform: translateY(-40px); opacity: 0.9; }
//             100% { transform: translateY(0px); opacity: 0.6; }
//           }

//           a:hover {
//             color: #ff1493 !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Contact;


import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.overflow = "auto"; // ✅ Allow scrolling
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
      minHeight: "100vh", // ✅ Fix height to allow scrolling
    },
    card: {
      border: "2px solid rgba(255, 255, 255, 0.6)", // ✅ Only border
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
      position: "relative", // ✅ Fix position so it stays at the bottom
      width: "100%",
      textAlign: "center",
      padding: "15px",
      // background: "#333",
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

      {/* Footer Added */}
      {/* <footer style={styles.footer}>
        Developed by MEHITHA
      </footer> */}

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




