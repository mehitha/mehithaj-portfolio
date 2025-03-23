

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./blog";
import Educate from "./edu";
import Contact from "./contact";
import About from "./about";  
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
          <Route path="/about" element={<About />} />  
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
