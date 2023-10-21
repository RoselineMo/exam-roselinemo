import React from "react";
import NavButton from "../components/NavButton";
import TopButton from "../components/TopButton";

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

      <div className="blog__cta">
        <p>Login to explore more exciting content</p>

        <div className="cta__buttons">
          <NavButton label="Login" path="/login" />
          <NavButton label="Back to home" path="/" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
