import React, { useState, useEffect } from "react";

const Parallax = ({ imageUrl, children }) => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundPosition = `50% ${scrollPos * 0.5}px`;

  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition,
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;