import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export type Theme = "light" | "dark";

export type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const THEME_STORAGE_KEY = "agentspod-theme";

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

function getSystemTheme(): Theme {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isTheme(storedTheme)) {
      return storedTheme;
    }
  } catch {
    // Ignore storage errors and continue with system preference.
  }

  return getSystemTheme();
}

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [isReconciled, setIsReconciled] = useState(false);

  useEffect(() => {
    setTheme(getInitialTheme());
    setIsReconciled(true);
  }, []);

  useEffect(() => {
    if (!isReconciled) {
      return;
    }

    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = theme;
    }

    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
      } catch {
        // Ignore storage errors to keep theme switching functional.
      }
    }
  }, [isReconciled, theme]);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
