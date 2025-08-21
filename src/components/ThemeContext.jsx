import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

export default function ThemeProvider() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemedApp />
    </ThemeContext.Provider>
  );
}

function ThemedApp() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={style}>
      <h2>Theme: {theme}</h2>
      <button onClick={toggleTheme}>Ganti Tema</button>
    </div>
  );
}
