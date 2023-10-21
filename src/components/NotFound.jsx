import React from "react";
import NavButton from "./NavButton";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404 - Page Not Found</h1>
      <NavButton label="Back to home" path="/" />
    </div>
  );
};

export default NotFound;
