import { useDarkModeHook } from "../context/ThemeContext";

const DarkModeButton = () => {
  const { darkMode, setDarkMode } = useDarkModeHook;

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="text-white">
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};
export default DarkModeButton;
