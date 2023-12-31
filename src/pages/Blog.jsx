import React from "react";
import NavButton from "../components/NavButton";

const Blog = () => {
  return (
    <div className="blog">
      <img
        src="
        https://images.unsplash.com/photo-1456615074700-1dc12aa7364d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="blog"
      />

      <div className="blog__header">
        <h1>Welcome to the super-exciting Blog Page!</h1>
        <p>Let me tell you a story</p>
        <NavButton label="Preview" path="/preview" />
      </div>
    </div>
  );
};

export default Blog;
