import { themes } from "./themes";

export type ThemeKey = keyof typeof themes;

export interface ThemeState {
  themeName: ThemeKey;
  setTheme: (themeName: ThemeKey) => void;
}
