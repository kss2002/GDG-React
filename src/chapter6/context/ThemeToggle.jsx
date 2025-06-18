// ThemeToggle.jsx
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDark ? '🌙 다크모드' : '☀️ 라이트모드'}
    </button>
  );
}
