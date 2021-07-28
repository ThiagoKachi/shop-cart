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
    const productsList = await getProductsList(productName === '' ? 'iphone' : productName);
    setProductDetail(productsList);
    setLoading(false);
  }

  function getProductsId(id, price) {
    setIdProduct([id, ...idProduct])
    setProductPrice([price, ...productPrice])
  }

  useEffect(() => {
    async function getProdutsListToHome() {
      const productsList = await getProductsList('iphone');
      setProductDetail(productsList);
    }
    getProdutsListToHome()
  },[])

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

  function removeItem(id) {
    const filteredValues = endPointResultProcessed.filter((product) => product.id !== id)
    setEndPointResultProcessed(filteredValues);
    setIdProduct(filteredValues.map((e) => e.id)) // pegar somente o id
    setProductPrice(filteredValues.map((e) => e.price))
    console.log(filteredValues)
  }

  // Modal logic --------------
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function backToShop() {
    setIdProduct([]);
    setProductPrice([])
    closeModal()
  }

  const providerProductName = {
    productName,
    setProductName,
    productsDetail,
    backToShop,
    loading,
    getProduts,
    getProductsId,
    idProduct,
    removeItem,
    productPriceTotal,
    productPrice,
    endPointResultProcessed,
    modalIsOpen,
    openModal,
    closeModal
  }

  return (
    <AppContext.Provider value={ providerProductName }>
      {children}
    </AppContext.Provider>
  );
}
