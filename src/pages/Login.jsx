import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import {Link} from "react-router-dom";
import useFakeAuth from "../custom-hooks/useFakeAuth";

const Login = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    error,
    setError,
    handleLogin,
    loggedIn,
  } = useFakeAuth();

  const handleTryAgain = () => {
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <div className="login">
      <img
        src="https://img.freepik.com/free-photo/top-view-desk-concept-with-copy-space_23-2148223112.jpg?w=826&t=st=1697754577~exp=1697755177~hmac=da6ef7d9757c8fb8d08141f97dbbb78b32f581ebfe74baffdcab155d43747275"
        alt="login"
      />
      <div className="formContainer">
        <ErrorBoundary>
          <form onSubmit={handleLogin}>
            <h1>Welcome!</h1>
            <p>Login to access amazing resources.</p>
            <input
              type="text"
              placeholder="Username"
              name="username"
              autoComplete="on"
              value={username}
              required
              minLength={2}
              maxLength={20}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              required
              minLength={6}
              maxLength={20}
              onChange={(event) => setPassword(event.target.value)}
            />
            {error && (
              <>
                <p style={{color: "red", fontSize: "13px"}}>{error}</p>
                <button type="reset" onClick={handleTryAgain}>
                  Try again
                </button>
              </>
            )}
            {!loggedIn && <button>Login Required</button>}

            <div className="loginForm__action">
              <small className="forgot">Forgot password?</small>
              <div className="loginForm__button">
                <button type="submit">Login</button>
              </div>
            </div>

            <div className="form__bottomtxt">
              <small>
                Don't have an account?{" "}
                <Link>
                  <span className="signUp">Sign up now.</span>
                </Link>
              </small>
            </div>
          </form>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Login;
