"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  is_dark: boolean;
  set_theme: (theme: Theme) => void;
  toggle_theme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function apply_theme_class(theme: Theme) {
  const root = document.documentElement;
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const effective = theme === "system" ? (systemPrefersDark ? "dark" : "light") : theme;
  if (effective === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("theme");
      const initial: Theme = stored === "light" || stored === "dark" || stored === "system" ? (stored as Theme) : "dark";
      setTheme(initial);
      apply_theme_class(initial);
    } catch {
      setTheme("dark");
      apply_theme_class("dark");
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
    }
    apply_theme_class(theme);
    if (theme === "system") {
      try {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = () => apply_theme_class("system");
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
      } catch {}
    }
  }, [theme]);

  const set_theme = useCallback((value: Theme) => setTheme(value), []);
  const toggle_theme = useCallback(() => setTheme((t) => (t === "dark" ? "light" : t === "light" ? "system" : "dark")), []);

  const value = useMemo<ThemeContextValue>(() => ({
    theme,
    is_dark: (() => {
      if (theme === 'dark') return true;
      if (theme === 'light') return false;
      try {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      } catch {
        return false;
      }
    })(),
    set_theme,
    toggle_theme,
  }), [theme, set_theme, toggle_theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}

