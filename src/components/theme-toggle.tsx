"use client";

import { useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      onClick={() => {
        console.log('Toggle clicked!');
        setIsDark(!isDark);
        if (!isDark) {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.removeAttribute('data-theme');
        }
      }}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-white/10 backdrop-blur-md p-3 text-slate-200 hover:bg-white/20 transition-all duration-300 shadow-lg cursor-pointer"
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3" />
        </svg>
      )}
    </button>
  );
}
