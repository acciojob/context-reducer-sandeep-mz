import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username) => {
    setCurrentUser(username);
    setIsAuthenticated(true);
  };

  const signout = () => {
    setCurrentUser('');
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider value={{ currentUser, isAuthenticated, login, signout }}>
      {children}
    </UserContext.Provider>
  );
};
