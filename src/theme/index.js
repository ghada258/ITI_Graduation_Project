// src/theme/index.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#217860",
    },
    secondary: {
      main: "#9c27b0",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ed6c02",
    },
    info: {
      main: "#0288d1",
    },
    success: {
      main: "#2e7d32",
    },
    background: {
      // default: "#87DEC6",
      paper: "#fff",
    },
    text: {
      primary: "#165040",
      secondary: "#4B4848",
      
    },
    neutral: {
      mainPrimaryGray: "#4B4848", 
    },
  },
  typography: {
    // fontFamily: "Roboto, sans-serif",
    fontFamily:'Nunito'
  },
   poppins: {
      fontFamily: "Poppins",
    },

  custom: {
    sidebarWidth: 240,
    borderRadius: "12px",
  },
});

export default theme;


