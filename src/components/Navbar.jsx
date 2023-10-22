import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import {Link} from "react-router-dom";
import NavButton from "./NavButton";
import * as icon from "react-feather";
import ErrorComponent from "./ErrorComponent";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav__links">
        <Link to="https://x.com/roselinemo_" target="_blank">
          <h2 className="nav__logo">RoselineMo</h2>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/resources">Resources</Link>

        <ErrorBoundary>
          <NavButton
            label="404-Tester"
            path="/notfound"
            className="login__button"
          />
        </ErrorBoundary>

        <ErrorBoundary>
          <ErrorComponent />
        </ErrorBoundary>
      </div>

      <div className="nav__icons">
        <Link
          to="https://github.com/roselinemo/exam-roselinemo"
          target="_blank"
        >
          <icon.Code size={20} />
        </Link>

        <Link to="https://github.com/roselinemo" target="_blank">
          <icon.GitHub size={20} />
        </Link>

        <ErrorBoundary>
          <NavButton label="Login" path="/login" className="login__button" />
        </ErrorBoundary>
      </div>
    </nav>
  );
};

export default Navbar;
