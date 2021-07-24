import React, { useContext, useEffect, useState } from 'react';

import { Header } from '../Header';
import { AppContext } from '../../context/AppContext';
import { getProductsInfo } from '../../services';

export function Cart() {
  const { idProduct } = useContext(AppContext)
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
    async function aaa() {
      const resultado = await Promise.all(endPointResultPromise); // Trata os valores que retornam como Promise
      setEndPointResultProcessed(resultado)
    };

    aaa();
  }, [endPointResultPromise])

  return (
    <>
      <Header />
      {endPointResultProcessed.map((product) => <p key={product.id}>{product.title}</p>)}
    </>
  )
}
