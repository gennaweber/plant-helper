import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    common: {
      black: "#1e2229",
    },
    primary: {
      dark: "#0e453c",
      main: "#146356",
      light: "#438277",
    },
    secondary: {
      dark: "#729862",
      main: "#A3DA8D",
      light: "#b5e1a3",
    },
    warning: {
      light: "#f5d3a7",
      main: "#F3C892",
      dark: "#aa8c66",
    },
    success: {
      light: "#fff3ca",
      main: "#FFF1BD",
      dark: "#b2a884",
    },
    info: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#1e2229",
    },
    background: {
      paper: "#FFF1BD",
    },
  },
  typography: {
    fontFamily: "Lora",
    htmlFontSize: 24,
    h1: {
      fontFamily: "Montserrat Alternates",
      fontWeight: 800,
    },
    h2: {
      fontFamily: "Montserrat Alternates",
      fontWeight: 500,
    },
    h3: {
      fontFamily: "Lora",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Montserrat Alternates",
      fontWeight: 200,
    },
    h5: {
      fontFamily: "Montserrat Alternates",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "200px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          position: "relative",
        },
      },
    },
  },
});

function App() {
  const [password, setPassword] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="flexWrapper">
          <div className="flexGrow">
            <Routes>
              <Route
                path="/"
                element={password ? <Home /> : <Navigate replace to="/login" />}
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
