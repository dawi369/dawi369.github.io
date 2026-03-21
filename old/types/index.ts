// Theme context
export type Theme = "light" | "dark" | "system";

export interface ThemeContextValue {
  theme: Theme;
  is_dark: boolean;
  set_theme: (theme: Theme) => void;
  toggle_theme: () => void;
}
