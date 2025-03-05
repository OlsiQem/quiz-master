import { createTheme } from "@mui/material/styles";

// Example color palette inspired by a minimal, pastel blue UI
const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#E7EDF3", // Light bluish background
      paper: "#FFFFFF", // Card/Paper background
    },
    primary: {
      main: "#8AAAE5", // Pastel-ish blue for main elements
    },
    secondary: {
      main: "#F0F4FA", // Slightly lighter accent color
    },
    text: {
      primary: "#222222",
      secondary: "#555555",
    },
  },
  shape: {
    borderRadius: 20, // Rounded corners for Paper, Buttons, etc.
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    // You can import "Inter" from Google Fonts or another service
    h5: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none", // Keep button text in normal case
      fontWeight: 500,
    },
  },
  components: {
    // Override specific Material-UI components
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24, // More pronounced rounding for cards
          boxShadow: "0px 6px 16px rgba(0,0,0,0.1)", // Subtle shadow
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
          color: "#8AAAE5", // Match primary color for the progress
        },
      },
    },
  },
});

export default theme;
