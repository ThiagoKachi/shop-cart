import React, { useEffect, useState } from 'react';
import { AppContext } from './AppContext';

import { getProductsList, getProductsInfo } from '../services';

export function Provider({ children }) {
  const [productName, setProductName] = useState('');

  const [productsDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [idProduct, setIdProduct] = useState([]);
  const [productPrice, setProductPrice] = useState([]);
  const [productPriceTotal, setProductPriceTotal] = useState('');

  async function getProduts() {
    setLoading(true);
    const productsList = await getProductsList(productName === '' ? 'iphone' : productName); // Fazer modificação
    setProductDetail(productsList);
    setLoading(false);
  }

  function getProductsId(id, price) {
    setIdProduct([id, ...idProduct]) // Função com bug
    setProductPrice([price, ...productPrice])
  }

  useEffect(() => {
    async function getProdutsListToHome() {
      const productsList = await getProductsList('iphone');
      setProductDetail(productsList);
    }
    getProdutsListToHome()
  },[productName])

  // Cart logic -------------
  const [endPointResultPromise, setEndPointResultPromise] = useState([]);
  const [endPointResultProcessed, setEndPointResultProcessed] = useState([]);
  
  useEffect(() => {
    async function getProductsInfoFromApi() {
      const endpointResultFromIds = await idProduct.map((product) => getProductsInfo(product))
      setEndPointResultPromise(endpointResultFromIds) // Retorna os valores como Promise
    }

    getProductsInfoFromApi();
  }, [idProduct])

  useEffect(() => {
    async function processPromiseResult() {
      const resultado = await Promise.all(endPointResultPromise); // Trata os valores que retornam como Promise
      setEndPointResultProcessed(resultado)
    };

    processPromiseResult();
  }, [endPointResultPromise])

  useEffect(() => {
    function calcTotalPriceOfcart() {
      const total = productPrice.length === 0 ? '00,00' : productPrice.reduce((total, currentElement) => total + currentElement)
      setProductPriceTotal(total);
    }

    calcTotalPriceOfcart();
  }, [productPrice])

  function removeItem(id, price) {
    const filteredValues = endPointResultProcessed.filter((product) => product.id !== id)
    const filteredPrice = endPointResultProcessed.map((product) => product.price === price && productPriceTotal - price)
    setEndPointResultProcessed(filteredValues);
    setIdProduct(filteredValues)
    setProductPrice(filteredPrice)
  }

  // Cart logic --------------

  const providerProductName = {
    productName,
    setProductName,
    productsDetail,
    loading,
    getProduts,
    getProductsId,
    idProduct,
    removeItem,
    productPriceTotal,
    productPrice,
    endPointResultProcessed,
  }

  return (
    <AppContext.Provider value={ providerProductName }>
      {children}
    </AppContext.Provider>
  );
}
