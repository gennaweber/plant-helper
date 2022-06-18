import { createContext, useEffect, useState } from 'react';
import { app } from './firebase';

// create context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [user, setUser] = useState(null);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = app.auth().onAuthStateChanged((user) => {
      setUser(user._delegate);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
