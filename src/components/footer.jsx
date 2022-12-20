import React, { useState, useEffect } from "react";

const Footer = () => {
  const [theme, setTheme] = useState(parseInt(localStorage.getItem("theme") || 0));
  const themes = ["White", "Dark"];

  var r = document.querySelector(":root");

  useEffect(() => {
    if (theme == 1) {
      r.style.setProperty("--examples-bg-color", "#073642");
      r.style.setProperty("--examples-text-color", "white");
      r.style.setProperty("--text-color", "white");
      r.style.setProperty("--bg-color", "black");

      return;
    }

    r.style.setProperty("--examples-bg-color", "rgba(253, 209, 58, 0.4)");
    r.style.setProperty("--examples-text-color", "black");
    r.style.setProperty("--text-color", "black");
    r.style.setProperty("--bg-color", "white");
  }, [theme]);

  return (
    <footer>
      <label className="switch">
        <input
          type="checkbox"
          defaultChecked={theme}
          onChange={e => {
            localStorage.setItem("theme", theme ? 0 : 1);
            setTheme(parseInt(theme ? 0 : 1));
          }}
        ></input>
        <span className="slider round"></span>{" "}
      </label>
      <span className="theme">{themes[theme]} Theme</span>
    </footer>
  );
};

export default Footer;
