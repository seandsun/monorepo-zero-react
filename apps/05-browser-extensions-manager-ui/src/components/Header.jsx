import { useState } from 'react';

import logoLightImg from '../../public/assets/images/logo.svg';
import logoDarkImg from '../../public/assets/images/logo-dark.svg';
import sunLogo from '../../public/assets/images/icon-sun.svg';
import moonLogo from '../../public/assets/images/icon-moon.svg';

export const Header = () => {
  const savedTheme = localStorage.getItem('dark');

  if (JSON.parse(savedTheme)) {
    document.documentElement.classList.add('dark');
  }

  const [isDark, setIsDark] = useState(JSON.parse(savedTheme));

  const handleClick = () => {
    const isDarkChanged = document.documentElement.classList.toggle('dark');
    setIsDark(isDarkChanged);
    localStorage.setItem('dark', isDarkChanged);
  };

  return (
    <div className="bg-Neutral-0 dark:bg-Neutral-800 flex justify-between items-center h-[66px] px-3 py-2 rounded-[10px] mb-6">
      <img src={isDark ? logoDarkImg : logoLightImg} alt="Logo image" />
      <button
        onClick={handleClick}
        className="bg-Neutral-100 dark:bg-Neutral-700 size-[50px] rounded-[10px] cursor-pointer hover:bg-Neutral-200 dark:hover:bg-Neutral-600 focus:outline-none focus:ring-2 focus:ring-Red-500 dark:focus:ring-Red-500 dark:focus:border-2 dark:focus:border-Neutral-900 transition duration-300 ease-in-out"
      >
        <img
          className="m-auto"
          src={isDark ? sunLogo : moonLogo}
          alt="Icon moon"
        />
      </button>
    </div>
  );
};
