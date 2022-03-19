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
    primary: {
      dark: "#1e316d",
      main: "#253D88",
      light: "#5164a0",
    },
    secondary: {
      light: "#fcdf94",
      main: "#FBD166",
      dark: "#c9a752",
    },
    error: {
      dark: "#c2544a",
      main: "#F2695D",
      light: "#f5877d",
    },
    warning: {
      light: "#fae8e7",
      main: "#F6D9D7",
      dark: "#ddc3c2",
    },
    success: {
      light: "#cde4af",
      main: "#B8D98D",
      dark: "#93ae71",
    },
    info: {
      main: "#FFFFFF",
    },
  },
  typography: {},
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
