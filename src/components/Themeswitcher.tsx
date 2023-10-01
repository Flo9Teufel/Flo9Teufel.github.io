import { useTheme } from "../hooks/useTheme";

export const Themeswitcher = () => {
  const [theme, handleChange] = useTheme("dark");

  return (
    <div className="container-switch">
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={theme === "dark"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
