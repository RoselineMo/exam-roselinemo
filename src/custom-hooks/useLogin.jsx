import {useState} from "react";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = {
        setUsername,
        setPassword,
      };

      const data = response.data;

      setIsAuthenticated(true);
    } catch (error) {
      setError("Invalid username or password. Please try again.");
    }
  };

  const isLoggedIn = () => {
    return isAuthenticated;
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
