import { useDarkMode } from "../DarkModeContext";

export default function DarkModeToggle() {
  const { dark, setDark } = useDarkMode();

  return (
    <button
      className="btn btn-outline-secondary mb-3"
      onClick={() => setDark(!dark)}
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
