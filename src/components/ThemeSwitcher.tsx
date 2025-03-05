// src/ThemeSwitcher.tsx
import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { ThemeKey, useThemeStore } from "../store";

type ActionProp = { name: string; themeKey: ThemeKey };

const ThemeSwitcher: React.FC = () => {
  const setTheme = useThemeStore((state) => state.setTheme);

  const actions: ActionProp[] = [
    { name: "Pastel", themeKey: "pastel" },
    { name: "Dark", themeKey: "dark" },
    { name: "Vibrant", themeKey: "vibrant" },
  ];

  return (
    <SpeedDial
      ariaLabel="Theme Switcher"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      title="test"
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          onClick={() => setTheme(action.themeKey)}
          slotProps={{ tooltip: { open: true, title: action.name } }}
        />
      ))}
    </SpeedDial>
  );
};

export default ThemeSwitcher;
