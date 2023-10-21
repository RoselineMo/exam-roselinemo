import React from "react";
import useFakeAuth from "../custom-hooks/useFakeAuth";
import NavButton from "../components/NavButton";

const Resources = () => {
  const {loggedIn} = useFakeAuth();

  return (
    <div className="resources">
      <img
        src=" https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="resources"
      />

      <div className="resources__header">
        <h1>Welcome to the amazing Resources Page!</h1>
      </div>

      <div>
        {loggedIn() ? (
          <div>
            <Resources />
          </div>
        ) : (
          <div className="resources__cta">
            <p>You must be logged in to access the resources.</p>

            <div className="cta__buttons">
              <NavButton label="Login" path="/login" />
              <NavButton label="Back to home" path="/" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
