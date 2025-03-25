// import React, { useEffect } from "react";

// const Contact = () => {
//   useEffect(() => {
//     document.body.style.margin = "0";
//     document.body.style.overflowX = "hidden"; // Prevent horizontal scrolling
//     return () => {
//       document.body.style.margin = "";
//       document.body.style.overflowX = "auto";
//     };
//   }, []);

//   const styles = {
//     container: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       minHeight: "100vh",
//       padding: "20px",
//       textAlign: "center",
//       fontFamily: "'Comic Sans MS', cursive, sans-serif",
//       background: "linear-gradient(-45deg, #2f06c2, #1915da, #2434df)",
//       animation: "gradientAnimation 10s ease infinite",
//       color: "white",
//       width: "100vw",
//       maxWidth: "100%",
//       overflowX: "hidden", // Ensures no horizontal scroll
//       boxSizing: "border-box",
//     },
//     card: {
//       marginBottom: "20px",
//       width: "90%",
//       maxWidth: "600px", // Ensures proper spacing
//     },
//     title: {
//       fontSize: "2rem",
//       fontWeight: "bold",
//       marginBottom: "15px",
//       color: "white",
//       textShadow: "2px 2px black",
//     },
//     details: {
//       fontSize: "1rem",
//       lineHeight: "1.6",
//       color: "#333",
//       marginBottom: "12px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       textAlign: "center",
//     },
//     speechBubble: {
//       border: "2px solid black",
//       borderRadius: "15px",
//       padding: "10px",
//       display: "inline-block",
//       fontSize: "1rem",
//       color: "white",
//     },
//     cartoonBox: {
//       background: "white",
//       border: "3px solid black",
//       borderRadius: "15px",
//       padding: "15px",
//       textAlign: "center",
//       boxShadow: "5px 5px 0 black",
//       transition: "transform 0.3s ease-in-out",
//       maxWidth: "150px",
//       width: "100%",
//       margin: "auto",
//     },
//     cartoonImg: {
//       width: "60px",
//       height: "60px",
//       marginBottom: "10px",
//     },
//     link: {
//       textDecoration: "none",
//       color: "#FF4500",
//       fontWeight: "bold",
//       transition: "0.3s",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       {/* Injecting CSS for responsiveness */}
//       <style>{`
//         .cartoonSection {
//           display: grid;
//           width: 100%;
//           max-width: 900px;
//           gap: 20px;
//           grid-template-columns: repeat(1, 1fr); /* Default: 1 box per row */
//           justify-content: center;
//           align-items: center;
//         }

//         @media (min-width: 600px) {
//           .cartoonSection {
//             grid-template-columns: repeat(2, 1fr); /* 2 boxes per row for screens >600px */
//           }
//         }

//         @media (min-width: 884px) {
//           .cartoonSection {
//             grid-template-columns: repeat(4, 1fr); /* 4 boxes per row for screens >884px */
//           }
//         }
//       `}</style>

//       <div style={styles.card}>
//         <h2 style={styles.title}>📞 Contact Me</h2>
//         <p style={styles.details}>
//           <span style={styles.speechBubble}>📧 Email: angelinmehitha@gmail.com</span>
//         </p>
//         <p style={styles.details}>
//           <span style={styles.speechBubble}>📍 Location: Tirupur, India</span>
//         </p>
//       </div>

//       <div className="cartoonSection">
//         {[
//           { name: "GitHub", link: "https://github.com/mehitha", img: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png" },
//           { name: "YouTube", link: "https://youtube.com", img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png" },
//           { name: "LinkedIn", link: "https://linkedin.com/in/mehitha", img: "https://cdn-icons-png.flaticon.com/512/145/145807.png" },
//           { name: "Instagram", link: "https://instagram.com/mehitha", img: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png" }
//         ].map((item, index) => (
//           <div key={index} className="cartoonBox" style={styles.cartoonBox}>
//             <img src={item.img} alt={`${item.name} Cartoon`} style={styles.cartoonImg} />
//             <p style={{ fontWeight: "bold", color: "#333" }}>🔗 {item.name}</p>
//             <a href={item.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
//               Visit {item.name}
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Contact;









import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.margin = "";
      document.body.style.overflowX = "auto";
    };
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      padding: "20px",
      textAlign: "center",
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
      background: "linear-gradient(-45deg, #2f06c2, #1915da, #2434df)",
      animation: "gradientAnimation 10s ease infinite",
      color: "white",
      width: "100%",
    },
    card: {
      margin: "40px",
     
      width: "90%",
      maxWidth: "600px",
     
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "white",
      textShadow: "2px 2px black",
    },
    details: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#fff",
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    speechBubble: {
      border: "2px solid black",
      borderRadius: "15px",
      padding: "10px",
      display: "inline-block",
      fontSize: "1rem",
      color: "white",
      // background: "rgba(0, 0, 0, 0.2)",
    },
    cartoonBox: {
      background: "white",
      border: "2px solid black",
      borderRadius: "15px",
      padding: "20px", // Increased padding for better spacing
      textAlign: "center",
      boxShadow: "5px 5px 0 black",
      transition: "transform 0.3s ease-in-out",
      width: "100%",
      maxWidth: "150px", // Ensuring consistent box size
    },
    cartoonImg: {
      width: "50px",
      height: "50px",
      marginBottom: "10px",
    },
    link: {
      textDecoration: "none",
      color: "#FF4500",
      fontWeight: "bold",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.container}>
      <style>{`
        .cartoonSection {
          display: grid;
          width: 90%;
          max-width: 900px;
          gap: 25px; /* Increased space between boxes */
          grid-template-columns: repeat(1, 1fr); /* Default: 1 box per row */
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 600px) {
          .cartoonSection {
            grid-template-columns: repeat(2, 1fr); /* 2 boxes per row on tablets */
          }
        }

        @media (min-width: 900px) {
          .cartoonSection {
            grid-template-columns: repeat(3, 1fr); /* 3 boxes per row on medium screens */
          }
        }

        @media (min-width: 1200px) {
          .cartoonSection {
            grid-template-columns: repeat(4, 1fr); /* 4 boxes per row on large screens */
          }
            
        }
          @media (max-width: 600px) {
    .cartoonBox {
      max-width: 120px; /* Smaller size on very small screens */
    }
  }

  @media (min-width: 900px) {
    .cartoonBox {
      max-width: 180px; /* Slightly bigger on medium screens */
    }
  }

  @media (min-width: 1200px) {
    .cartoonBox {
      max-width: 200px; /* Bigger size on large screens */
    }
  }
      `}</style>

      <div style={styles.card}>
        <h2 style={styles.title}>📞 Contact Me</h2>
        <p style={styles.details}>
          <span style={styles.speechBubble}>📧 Email: angelinmehitha@gmail.com</span>
        </p>
        <p style={styles.details}>
          <span style={styles.speechBubble}>📍 Location: Tirupur, India</span>
        </p>
      </div>

      <div className="cartoonSection">
        {[
          { name: "GitHub", link: "https://github.com/mehitha", img: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png" },
          { name: "YouTube", link: "https://youtube.com", img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png" },
          { name: "LinkedIn", link: "https://linkedin.com/in/mehitha", img: "https://cdn-icons-png.flaticon.com/512/145/145807.png" },
          { name: "Instagram", link: "https://instagram.com/mehitha", img: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png" }
        ].map((item, index) => (
          <div key={index} className="cartoonBox" style={styles.cartoonBox}>
            <img src={item.img} alt={`${item.name} Cartoon`} style={styles.cartoonImg} />
            <p style={{ fontWeight: "bold", color: "#333" }}>🔗 {item.name}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
              Visit {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
