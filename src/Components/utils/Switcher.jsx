import React, { useState } from "react";
import useDarkSide from "./useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          className="border-none"
          checked={darkSide}
          onChange={toggleDarkMode}
          moonColor="#5a5a5a"
          sunColor="#ffffff"
          color={colorTheme === "light" ? "#5a5a5a" : "#e9e9e9"}
          size={26}
        />
      </div>
    </>
  );
}
