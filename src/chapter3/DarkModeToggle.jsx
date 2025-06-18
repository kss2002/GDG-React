import { useState } from 'react';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <h1>{isDark ? '다크모드' : '라이트모드'}</h1>
      <button onClick={() => setIsDark(!isDark)}>모드 전환 버튼</button>
    </div>
  );
};

export default DarkModeToggle;
