import { createTheme, ThemeProvider } from '@mui/material';
import algoliasearch from 'algoliasearch';
import { useState } from 'react';
import { Index, InstantSearch } from 'react-instantsearch-dom';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

import 'firebase/compat/auth';
import { UserContextProvider } from './helpers/UserContext';
import Collections from './pages/Collections';
import CollectionView from './pages/CollectionView';

const searchClient = algoliasearch(
  'FHN6MLHV4X',
  '656a1e7385fbe0581afb2148b5da5d94'
);

const theme = createTheme({
  palette: {
    common: {
      black: '#1e2229',
      white: '#fff',
    },
    primary: {
      dark: '#0e453c',
      main: '#146356',
      light: '#438277',
    },
    secondary: {
      dark: '#729862',
      main: '#dbec8e',
      light: '#b5e1a3',
    },
    success: {
      dark: '#0e453c',
      main: '#146356',
      light: '#438277',
    },
    info: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#1e2229',
    },
    background: {
      paper: '#fff',
    },
  },
  shape: {
    borderRadius: 15,
  },
  typography: {
    fontFamily: 'Montserrat Alternates',
    htmlFontSize: 24,
    fontWeightRegular: 500,
    h1: {
      fontFamily: 'Montserrat Alternates',
      fontWeight: 800,
      fontSize: 50,
    },
    h2: {
      fontFamily: 'Montserrat Alternates',
      fontWeight: 500,
    },
    h3: {
      fontFamily: 'Montserrat Alternates',
    },
    h4: {
      fontFamily: 'Montserrat Alternates',
      fontWeight: 200,
    },
    h5: {
      fontFamily: 'Montserrat Alternates',
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'Montserrat Alternates',
      fontSize: 12,
    },
    body2: {
      fontFamily: 'Montserrat Alternates',
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '0.75rem',
          fontFamily: 'Montserrat Alternates',
          color: '#fff',
          background: '#1e2229',
          padding: 15,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: '200px',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          position: 'relative',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontFamily: 'Montserrat Alternates',
        },
        root: {
          background: '#fff',
        },
        '&MuiOutlinedInput-input': {
          fontFamily: 'Montserrat Alternates',
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          position: 'fixed',
        },
      },
    },
  },
});

const App = () => {
  const [auth, setAuth] = useState(
    window.localStorage.getItem('auth') || false
  );

  const [password, setPassword] = useState(
    window.localStorage.getItem('pass') || ''
  );

  const [state, setState] = useState(false);

  const toggleDrawer = (open) => {
    setState(open);
  };

  return (
    <InstantSearch searchClient={searchClient} indexName='plants_newest'>
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <Router>
            <div className='flexWrapper'>
              <div className='flexGrow'>
                <Routes>
                  <Route path='/auth' element={<Auth />} />
                  <Route
                    path='/'
                    element={
                      auth ? (
                        <Index indexName='plants'>
                          <Home state={state} toggleDrawer={toggleDrawer} />
                        </Index>
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />
                  <Route
                    path='/collection'
                    element={
                      auth ? (
                        <Index indexName='plants'>
                          <Collections
                            state={state}
                            toggleDrawer={toggleDrawer}
                          />
                        </Index>
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />
                  <Route
                    path='/collection/:name'
                    element={
                      auth ? (
                        <Index indexName='plants_newest'>
                          <CollectionView
                            state={state}
                            toggleDrawer={toggleDrawer}
                          />
                        </Index>
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />
                  <Route
                    path='/profile'
                    element={
                      auth ? (
                        <Index indexName='plants'>
                          <Profile state={state} toggleDrawer={toggleDrawer} />
                        </Index>
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />
                  {/* <Route
                    path="/dictionary"
                    element={
                      auth ? (
                        <Index indexName="dictionary">
                          <Dictionary
                            state={state}
                            toggleDrawer={toggleDrawer}
                          />
                        </Index>
                      ) : (
                        <Navigate replace to="/login" />
                      )
                    }
                  /> */}
                  {/* <Route
                    path='/refs'
                    element={
                      auth ? (
                        <Index indexName='refs'>
                          <Refs state={state} toggleDrawer={toggleDrawer} />
                        </Index>
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  /> */}
                  <Route
                    path='/login'
                    element={
                      <Login
                        password={password}
                        setPassword={setPassword}
                        setAuth={setAuth}
                      />
                    }
                  />
                </Routes>
              </div>
              <Footer />
            </div>
          </Router>
        </UserContextProvider>
      </ThemeProvider>
    </InstantSearch>
  );
};

export default App;
