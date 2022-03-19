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
import ExploreAll from "./pages/ExploreAll";
import Intro from "./pages/Intro";
import Footer from "./components/Footer";
import CityTemplate from "./pages/CityTemplate";
import SuggestedCities from "./pages/SuggestedCities";
import CreateProfile from "./pages/CreateProfile";
import Map from "./pages/Map";

function App() {
  //because ODS controls the search params via angular we can't use react-router-dom to do so
  //instead we'll just keep track of the url statefully
  // const [url, setUrl] = useState({
  //   full: window.location.href,
  //   query: window.location.search,
  // });

  const [currentLangCode, setCurrentLangCode] = useState(
    window.localStorage.i18nextLng || "en"
  );

  const [textSize, setTextSize] = useState(0);

  const [form, setForm] = useState({
    step: 1,
    numberOfPeople: 1,
    ages: [],
    priorities: [],
    completed: false,
  });

  const languages = [
    {
      code: "en",
      language: "English",
      dir: "ltr",
    },
    {
      code: "fa",
      language: "دری",
      dir: "rtl",
    },
    // {
    //   code: "ps",
    //   language: "پښتو",
    //   dir: "rtl",
    // },
  ];

  const currentLanguage = languages.find((l) => l.code === currentLangCode);

  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("dir", currentLanguage.dir);
  }, [currentLanguage]);

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
    typography: {
      fontFamily: "Gotham Narrow Book",
      fontSize: 14 + textSize,
      h1: {
        fontFamily: "Gotham Narrow Black",
      },
      h2: {
        fontFamily: "Gotham Narrow Medium",
      },
      h3: {
        fontFamily: "Gotham Narrow Medium",
      },
      h4: {
        fontFamily: "Gotham Narrow Light",
      },
      h5: {
        fontFamily: "Gotham Narrow Medium",
      },
      body1: {
        fontFamily: "Gotham Narrow Book",
        fontSize: 14 + textSize,
      },
      body2: {
        fontFamily: "Gotham Narrow Book",
        fontSize: 10 + textSize,
      },
    },
    shape: {
      borderRadius: 35,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minWidth: "200px",
          },
        },
      },

      MuiAccordion: {
        styleOverrides: {
          root: {
            paddingLeft: 0,
            paddingTop: 5,
            paddingRight: 0,
            paddingBottom: 0,
            borderBottomRightRadius: "inherit",
            borderBottomLeftRadius: "inherit",
            background: "#FAFAFA",
            color: "#000",
            "&.Mui-expanded": {
              background: "#F6D9D7",
              color: "#000",
            },
          },
        },
      },
      MuiCollapse: {
        styleOverrides: {
          root: {
            background: "#FAFAFA",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: "inherit",
            borderBottomLeftRadius: "inherit",
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            marginLeft: 10,
            marginTop: 10,
            marginRight: 10,
            marginBottom: 10,
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            paddingLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: {
            position: "absolute",
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
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontSize: "1.75rem",
            "&.MuiInputLabel-root": {
              whiteSpace: "normal",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            paddingLeft: 20,
          },
          root: {
            background: "#fff",
            fontFamily: "Gotham Narrow Book",
            fontSize: "1.75rem",
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          input: {
            padding: 10,
            backgroundColor: "#fff",
            borderRadius: 35,
            border: "2px",
            borderStyle: "solid",
            borderColor: "#253D88",
            minHeight: 28,
            boxSizing: "border-box",
            position: "relative",
          },
          root: {
            backgroundColor: "transparent",
            "&.Mui-focused": {
              backgroundColor: "transparent",
            },
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="flexWrapper">
          <div className="flexGrow">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    languages={languages}
                    setCurrentLangCode={setCurrentLangCode}
                    currentLangCode={currentLangCode}
                    textSize={textSize}
                    setTextSize={setTextSize}
                  />
                }
              />
              <Route
                path="/intro"
                element={
                  <Intro
                    languages={languages}
                    setCurrentLangCode={setCurrentLangCode}
                    currentLangCode={currentLangCode}
                    textSize={textSize}
                    setTextSize={setTextSize}
                  />
                }
              ></Route>
              <Route
                path="/explore-all"
                element={
                  <ExploreAll
                    languages={languages}
                    setCurrentLangCode={setCurrentLangCode}
                    textSize={textSize}
                    setTextSize={setTextSize}
                    currentLangCode={currentLangCode}
                  />
                }
              />
              <Route
                path="create-profile"
                element={
                  <CreateProfile
                    languages={languages}
                    setCurrentLangCode={setCurrentLangCode}
                    currentLangCode={currentLangCode}
                    textSize={textSize}
                    setTextSize={setTextSize}
                    form={form}
                    setForm={setForm}
                  />
                }
              />
              <Route
                path="/suggested-cities"
                element={
                  form.completed ? (
                    <SuggestedCities
                      form={form}
                      currentLangCode={currentLangCode}
                      languages={languages}
                      setCurrentLangCode={setCurrentLangCode}
                      textSize={textSize}
                      setTextSize={setTextSize}
                    />
                  ) : (
                    <Navigate replace to="/create-profile" />
                  )
                }
              />
              <Route
                path="/about/:cityname"
                element={
                  <CityTemplate
                    languages={languages}
                    setCurrentLangCode={setCurrentLangCode}
                    currentLangCode={currentLangCode}
                    textSize={textSize}
                    setTextSize={setTextSize}
                  />
                }
              />
              <Route path="/map/:cityname" element={<Map />} />
              <Route path="/map" element={<Map />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
