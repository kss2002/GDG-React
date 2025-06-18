// ThemePage.jsx
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function ThemePage() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}
