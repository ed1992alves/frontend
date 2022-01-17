import React, { useState, useEffect } from "react";

const Footer = () => {
  const [theme, setTheme] = useState(0);
  const themes = ["White", "Dark"];

  var r = document.querySelector(":root");

  useEffect(() => {
    if (theme) {
      r.style.setProperty("--bg-color", "#073642");
      r.style.setProperty("--text-color", "white");
      return;
    }

    r.style.setProperty("--bg-color", "rgba(253, 209, 58, 0.4)");
    r.style.setProperty("--text-color", "black");
  }, [theme]);

  return (
    <footer>
      <label className="switch">
        <input
          type="checkbox"
          onChange={e => {
            setTheme(parseInt(theme ? 0 : 1));
          }}
        ></input>
        <span className="slider round"></span>{" "}
      </label>
      <span class="theme">{themes[theme]} Theme</span>
    </footer>
  );
};

export default Footer;
