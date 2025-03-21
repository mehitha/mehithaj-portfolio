// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Blog from "./blog";
// import Educate from "./edu";
// import Contact from "./contact";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router> 
//       <div className="App">
//         <Header />
        
//         <Routes>
//           <Route path="/" element={<Blog />} />
//           <Route path="/mehithaj-portfolio" element={<Blog />} />
//           <Route path="/educate" element={<Educate />} />
//           <Route path="/contact" element={<Contact />} /> 
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./blog";
import Educate from "./edu";
import Contact from "./contact";
import About from "./about";  // ✅ Import About
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/mehithaj-portfolio" element={<Blog />} />
          <Route path="/educate" element={<Educate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />  {/* ✅ Add About Route */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
