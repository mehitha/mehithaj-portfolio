
// import React from "react";
// import myPic from './images/mypic.jpeg';




// const AboutMe = () => {
//   const styles = {
//     container: {
//       maxWidth: "800px",
//       margin: "50px auto",
//       padding: "20px",
//       textAlign: "center",
//       border: "1px solid #ddd",
//       borderRadius: "12px",
//       boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
//       background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
//       color: "#333",
//       fontFamily: "'Poppins', sans-serif",
//       animation: "fadeIn 1.5s ease-in-out",
//     },
//     imageContainer: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       marginBottom: "20px",
//     },
//     image: {
//       // width: "150px",
//       // height: "150px",
//       // borderRadius: "50%",
//       // boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
//       // transition: "transform 0.3s ease",
//       width: "150px", // Fixed width
//       height: "150px", // Fixed height
//       borderRadius: "50%", // Makes the image circular
//       objectFit: "cover", // Ensures the image fills the space properly
//       display: "block", // Ensures proper alignment
//       margin: "0 auto", // Centers the image horizontally
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      
//     },
//     heading: {
//       fontSize: "28px",
//       marginBottom: "10px",
//       fontWeight: "600",
//       color: "#222",
//     },
//     description: {
//       fontSize: "16px",
//       lineHeight: "1.6",
//       color: "#444",
//       padding: "0 10px",
//     },
//     button: {
//       marginTop: "15px",
//       padding: "10px 20px",
//       fontSize: "16px",
//       fontWeight: "bold",
//       color: "white",
//       background: "#ff758c",
//       border: "none",
//       borderRadius: "8px",
//       cursor: "pointer",
//       transition: "background 0.3s ease, transform 0.2s",
//     },
//     buttonHover: {
//       background: "#ff3e68",
//     },
//     "@keyframes fadeIn": {
//       "0%": { opacity: 0, transform: "translateY(-10px)" },
//       "100%": { opacity: 1, transform: "translateY(0)" },
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.imageContainer}>
      
//       <img
//   src={myPic}
//   alt="profile"
//   style={styles.image}


//           onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
//           onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
//         />
//       </div>
//       <h2 style={styles.heading}>About Me</h2>
//       <p style={styles.description}>
//         I am a passionate <strong>Full Stack Developer</strong> who loves
//         building web applications that enhance user experiences. With expertise
//         in <strong>React, JavaScript, Node.js, and Python</strong>, I create
//         intuitive and engaging interfaces.
//       </p>
//       <button
//         style={styles.button}
//         onMouseOver={(e) =>
//           (e.target.style.background = styles.buttonHover.background)
//         }
//         onMouseOut={(e) =>
//           (e.target.style.background = styles.button.background)
//         }
//       >
//         Learn More
//       </button>
//     </div>
//   );
// };

// export default AboutMe;


import React from "react";
import myPic from "./images/mypic.jpeg";

const AboutMe = () => {
  const styles = {
    pageContainer: {
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      position: "relative",
      overflow: "hidden",
      animation: "gradientAnimation 5s ease infinite",
      background: "linear-gradient(45deg, #6a11cb, #2575fc, #ff758c, #ff7eb3)",
      backgroundSize: "400% 400%",
     
    },
    "@keyframes gradientMove": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" },
    },
    bubble: (top, left, size, duration) => ({
      position: "absolute",
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      background: "rgba(255, 255, 255, 0.2)",
      
      borderRadius: "50%",
      animation: "floatAnimation 5s infinite ease-in-out",
      // zIndex: 1,
    }),
    "@keyframes float": {
      "0%": { transform: "translateY(0)", opacity: 0.6 },
      "50%": { transform: "translateY(-20px)", opacity: 1 },
      "100%": { transform: "translateY(0)", opacity: 0.6 },
    },
    container: {
      maxWidth: "800px",
      width: "90%",
      padding: "30px",
      textAlign: "center",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
     
      color: "#333",
      fontFamily: "'Poppins', sans-serif",
      // animation: "fadeIn 1.5s ease-in-out",
      animation: "gradientBG 10s ease infinite",
      zIndex: 2,
      marginBottom: "0",  // Ensure no extra space at the bottom
      paddingBottom: "0",
    },
    "@keyframes fadeIn": {
      "0%": { opacity: 0, transform: "translateY(-10px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
  
    },
    image: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      display: "block",
      margin: "0 auto",
      boxShadow: "0 4px 10px rgba(233, 239, 242, 0.3)",
      transition: "transform 0.3s ease",
    },
    heading: {
      fontSize: "28px",
      marginBottom: "10px",
      fontWeight: "600",
      color: "white",
      
    },
    description: {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "white",
      padding: "0 10px",
    },
    
    button: {
      margin: "15px",
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      // background: "#ff758c",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
     
      // transition: "background 0.3s ease, transform 0.2s",
    },
    buttonHover: {
      background: "#ff3e68",
    },
  };

  return (
    <div style={styles.pageContainer}>
      {/* Floating Bubbles */}
      <div style={styles.bubble(10, 20, 50, 6)} />
      <div style={styles.bubble(30, 70, 80, 8)} />
      <div style={styles.bubble(50, 40, 60, 5)} />
      <div style={styles.bubble(70, 10, 100, 7)} />
      <div style={styles.bubble(90, 80, 70, 6)} />

      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src={myPic}
            alt="profile"
            style={styles.image}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </div>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.description}>
          I am a passionate <strong>Full Stack Developer</strong> who loves
          building web applications that enhance user experiences. With
          expertise in <strong>React, JavaScript, Node.js, and Python</strong>,
          I create intuitive and engaging interfaces.
        </p>
        <button
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.background = styles.buttonHover.background)
          }
          onMouseOut={(e) =>
            (e.target.style.background = styles.button.background)
          }
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
