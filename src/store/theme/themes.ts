import { createTheme } from "@mui/material/styles";

// 1. Pastel Theme
export const pastelTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#E7EDF3",
      paper: "#FFFFFF",
    },
    primary: {
      main: "#8AAAE5",
    },
    secondary: {
      main: "#F0F4FA",
    },
    text: {
      primary: "#222222",
      secondary: "#555555",
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "0px 6px 16px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: "10px 20px",
          boxShadow: "none",
        },
        containedPrimary: {
          backgroundColor: "#8AAAE5",
          "&:hover": {
            backgroundColor: "#7B99D4",
          },
        },
        outlinedPrimary: {
          borderColor: "#8AAAE5",
          color: "#8AAAE5",
          "&:hover": {
            borderColor: "#7B99D4",
            color: "#7B99D4",
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "#8AAAE5",
        },
      },
    },
  },
});

// 2. Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1C1C1C",
      paper: "#2C2C2C",
    },
    primary: {
      main: "#BB86FC",
    },
    secondary: {
      main: "#03DAC6",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.4)",
        },
      },
    },
  },
});

// 3. Vibrant Theme
export const vibrantTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FEF9E7",
      paper: "#FFFFFF",
    },
    primary: {
      main: "#F78DA7",
    },
    secondary: {
      main: "#B5EAD7",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: "12px 24px",
          boxShadow: "none",
        },
        containedPrimary: {
          backgroundColor: "#F78DA7",
          "&:hover": {
            backgroundColor: "#EE7391",
          },
        },
      },
    },
  },
});

// Export all themes in a single object for convenience
export const themes = {
  pastel: pastelTheme,
  dark: darkTheme,
  vibrant: vibrantTheme,
};
