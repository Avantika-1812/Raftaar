import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext(); // Named export

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    fullname: {
      firstname: '',
      lastname: '',
    },
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};