import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const SUPPORTED_STATES = [
  { id: 'delhi', name: 'Delhi (NCT)', active: true },
  { id: 'haryana', name: 'Haryana', active: false },
  { id: 'punjab', name: 'Punjab', active: false },
  { id: 'up', name: 'Uttar Pradesh', active: false },
  { id: 'rajasthan', name: 'Rajasthan', active: false },
  { id: 'maharashtra', name: 'Maharashtra', active: false },
];

export const StateProvider = ({ children }) => {
  const [currentState, setCurrentState] = useState('delhi');

  return (
    <StateContext.Provider value={{ currentState, setCurrentState, SUPPORTED_STATES }}>
      {children}
    </StateContext.Provider>
  );
};

export const useAppState = () => useContext(StateContext);