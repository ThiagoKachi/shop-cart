import React, { useEffect, useState } from 'react';
import { AppContext } from './AppContext';

import { getProductsList } from '../services';

export function Provider({ children }) {
  const [productName, setProductName] = useState('');

  const [productsDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getProduts() {
    setLoading(true);
    const productsList = await getProductsList(productName  === '' ? 'informatica' : productName);
    setProductDetail(productsList);
    setLoading(false);
  }

  useEffect(() => {
    async function getProdutsListToHome() {
      const productsList = await getProductsList('informatica');
      setProductDetail(productsList);
    }
    getProdutsListToHome()
  },[productName])

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
