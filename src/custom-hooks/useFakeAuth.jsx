import {useState, useEffect} from "react";

const useFakeAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn) {
      setLoggedIn(true);
    }
  }, []);

  const login = () => {
    setLoggedIn(true);
    localStorage.setItem("loggedIn", true);
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  return {loggedIn, login, logout};
};

export default useFakeAuth;
