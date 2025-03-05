import { themes } from "./theme";

export type ThemeKey = keyof typeof themes;

export interface ThemeState {
  themeName: ThemeKey;
  setTheme: (themeName: ThemeKey) => void;
}
