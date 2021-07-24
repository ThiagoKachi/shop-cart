import React, { useContext, useState } from 'react';

import { AppContext } from '../../context/AppContext';

import { Container } from './styles';

export function Card() {
  const { loading, productsDetail } = useContext(AppContext)
  const [idProduct, setIdProduct] = useState([]);

  function getProductsId(id) {
    setIdProduct([id, ...idProduct])
  }

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
              <button onClick={() => getProductsId(id)}>Adicionar ao carrinho</button>
            </div>
          </div>
        ))
      ) : <span className="spinner"></span>}
      {console.log(productsDetail, idProduct)}
    </Container>
  )
}
