import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';

import { Container } from './styles';

export function Card() {
  const { loading, productsDetail, getProductsId, idProduct, productPrice } = useContext(AppContext)

  return (
    <Container>
      {!loading ? (
        productsDetail.map(({ title, thumbnail, price, id, original_price }) => (
          <div className="card" key={ id }>
            <img src={ thumbnail } alt="Foto do produto" />
            <div className="infos">
              <h1>{ title }</h1>
              <div className="prices">
                <p>R$ { price }</p>
                {original_price === null ? '' : <span className="original_price">R$ {original_price}</span>}
              </div>
              <button onClick={() => getProductsId(id, price)}>Adicionar ao carrinho</button>
            </div>
          </div>
        ))
      ) : <span className="spinner"></span>}
      {console.log(productsDetail, idProduct, productPrice)}
    </Container>
  )
}
