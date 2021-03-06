import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';

import { Container, Category } from './styles';
import bagImg from '../../assets/bag.svg';

export function Card() {
  const { loading, productsDetail, getProductsId, getCategoryName } = useContext(AppContext)

  return (
    <>
      <Category>
        <p className="category-name">{getCategoryName}</p>
      </Category>
      <Container>
        {!loading ? (
          productsDetail.map(({ title, thumbnail, price, id, original_price, shipping: { free_shipping } }) => (
            <div key={ id }>
              <div className="card">
                <img src={ thumbnail } alt="Foto do produto" />
                <div className="infos">
                  <h1>{ title }</h1>
                  <div className="prices">
                    <div className="price-original-price">
                      <p>R$ {price === null ? '00,00' : price.toString().replace('.', ',')}</p>
                      {original_price === null ? '' : <span className="original_price">R$ {original_price}</span>}
                    </div>
                    {free_shipping === true ? <p className="free-shipping">Frete Grátis</p> : ''}
                </div>
                <button onClick={() => getProductsId(id, price)}>
                  <img src={ bagImg } alt="Adicionar ao carrinho" className="svg-icon" />
                  <p>Adicionar ao carrinho</p>
                </button>
                  </div>
                </div>
            </div>
          ))
        ) : <span className="spinner"></span>}
      </Container>
    </>
  )
}
