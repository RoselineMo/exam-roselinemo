import {useState, useEffect} from "react";
import useFakeAuth from "./useFakeAuth";
import ErrorBoundary from "../components/ErrorBoundary";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {loggedIn, login, logout} = useFakeAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      login();
    } catch (error) {
      setError("Invalid username or password. Please try again.");
    }
  };

  const isLoggedIn = () => {
    return loggedIn;
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    setError,
    handleLogin,
    isLoggedIn,
  };
};

export default useLogin;
