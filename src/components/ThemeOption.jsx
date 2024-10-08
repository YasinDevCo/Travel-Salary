import React from "react";
import "./ThemeOption.css";

function ThemeOption({ theme }) {
  const setTheme = () => {
    document.querySelector("body").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };
  return (
    <div onClick={setTheme} className="themeOption" id={`theme-${theme}`}></div>
  );
}

export default ThemeOption;
