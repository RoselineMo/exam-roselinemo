import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import NotFound from "./components/NotFound";
import Resources from "./pages/Resources";
import ErrorComponent from "./components/ErrorComponent";

const App = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/blog"
              element={
                <ErrorBoundary>
                  <Blog />
                </ErrorBoundary>
              }
            />

            <Route
              path="/resources"
              element={
                <ErrorBoundary>
                  <Resources />
                </ErrorBoundary>
              }
            />

            <Route
              path="/login"
              element={
                <ErrorBoundary>
                  <Login />
                </ErrorBoundary>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
};

export default App;
