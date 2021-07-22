import React, { useState } from 'react';
import { AppContext } from './AppContext';

export function Provider({ children }) {
  const [productName, setProductName] = useState('');
  const providerProductName = {
    productName,
    setProductName
  }

  return (
    <AppContext.Provider value={ providerProductName }>
      {children}
    </AppContext.Provider>
  );
}
