import React from "react";
import {useNavigate} from "react-router-dom";

const NavButton = ({label, path}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button onClick={handleClick} className="nav__button">
      {label}
    </button>
  );
};

export default NavButton;
