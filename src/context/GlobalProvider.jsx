import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    
  const [globalPrice, setGlobalPrice] = useState(0);
  const [globalSignal, setGlobalSignal] = useState(false);

  return (
    <GlobalContext.Provider value={{ globalPrice, setGlobalPrice, globalSignal, setGlobalSignal }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal debe ser utilizado dentro de un GlobalProvider');
  }
  return context;
};
