import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Sun from '@hackernoon/pixel-icon-library/icons/SVG/regular/sun.svg';
import Moon from '@hackernoon/pixel-icon-library/icons/SVG/regular/moon.svg';

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="theme-button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
    {theme === "dark" ?
      <img className='theme-icon' src={Sun} alt="Toggle Theme" /> :
      <img className='theme-icon' src={Moon} alt="Toggle Theme" />
    }
    </button>
  );
}
