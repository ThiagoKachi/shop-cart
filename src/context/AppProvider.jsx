import React, { useState } from 'react';
import { AppContext } from './AppContext';

import { getProductsList } from '../services';

export function Provider({ children }) {
  const [productName, setProductName] = useState('');

  const [productsDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getProduts() {
    setLoading(true);
    const productsList = await getProductsList(productName);
    setProductDetail(productsList);
    setLoading(false);
  }

  const providerProductName = {
    productName,
    setProductName,
    productsDetail,
    loading,
    getProduts
  }

  return (
    <AppContext.Provider value={ providerProductName }>
      {children}
    </AppContext.Provider>
  );
}
