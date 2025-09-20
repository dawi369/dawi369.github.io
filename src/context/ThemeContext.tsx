"use client";

// React context for app-wide theme with localStorage persistence and .dark class toggling
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Theme, ThemeContextValue } from "@/types";

// Holds the theme API (theme, is_dark, set_theme, toggle_theme) for descendants
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// Add or remove the .dark class on <html> so CSS variables swap instantly
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

// Provider stores theme state, initializes from storage, and re-applies on change
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  // Initialize from localStorage; default to dark (server/OS pref handled in index.html)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("theme");
      const initial: Theme = stored === "light" || stored === "dark" || stored === "system" ? (stored as Theme) : "dark";
      setTheme(initial);
      apply_theme_class(initial);
    } catch (_) {
      setTheme("dark");
      apply_theme_class("dark");
    }
  }, []);

  // Persist to localStorage and apply .dark on every theme change; also react to system changes when in system mode
  useEffect(() => {
    try {
      window.localStorage.setItem("theme", theme);
    } catch (_) {
      // ignore storage errors
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

  // Public API: set an explicit theme or toggle between light/dark
  const set_theme = useCallback((value: Theme) => setTheme(value), []);
  const toggle_theme = useCallback(() => setTheme((t) => (t === "dark" ? "light" : t === "light" ? "system" : "dark")), []);

  // Memoize to avoid re-renders of consumers unless values actually change
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

// Consumer hook with guard so it's only used under ThemeProvider
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}

