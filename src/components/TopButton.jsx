import React from "react";

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} className="top__button">
      Back to top
    </button>
  );
};

export default TopButton;
