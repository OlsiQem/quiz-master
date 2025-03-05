import { create } from "zustand";
import { ThemeState } from "./store.types";

export const useThemeStore = create<ThemeState>((set) => ({
  themeName: "pastel",
  setTheme: (themeName) => set({ themeName }),
}));
