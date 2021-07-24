import React, { useEffect, useState } from 'react';
import { AppContext } from './AppContext';

import { getProductsList } from '../services';

export function Provider({ children }) {
  const [productName, setProductName] = useState('');

  const [productsDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [idProduct, setIdProduct] = useState([]);

  async function getProduts() {
    setLoading(true);
    const productsList = await getProductsList(productName === '' ? 'iphone' : productName); // Fazer modificação
    setProductDetail(productsList);
    setLoading(false);
  }

  function getProductsId(id) {
    setIdProduct([id, ...idProduct])
  }

  useEffect(() => {
    async function getProdutsListToHome() {
      const productsList = await getProductsList('iphone');
      setProductDetail(productsList);
    }
    getProdutsListToHome()
  },[productName])

  const providerProductName = {
    productName,
    setProductName,
    productsDetail,
    loading,
    getProduts,
    getProductsId,
    idProduct
  }

  return (
    <AppContext.Provider value={ providerProductName }>
      {children}
    </AppContext.Provider>
  );
}
