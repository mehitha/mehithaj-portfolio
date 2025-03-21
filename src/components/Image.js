import React from "react";
import "./index.css"; 
import profileImage from "./profile.jpg"; 

const Blog = () => {
  return (
    <div className="blog-card">
      <img src={profileImage} alt="Portfolio" className="blog-image" />
      <div className="blog-content">
        <h2>Welcome to My Portfolio</h2>
        <p>Explore my work and creative projects.</p>
      </div>
    </div>
  );
};

export default Blog;

