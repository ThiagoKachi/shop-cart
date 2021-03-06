import React, { useContext } from 'react';

import { Header } from '../../components/Header';
import { AppContext } from '../../context/AppContext';
import { Container } from './style';
import trashImg from '../../assets/trash.svg';
import { OrderDetails } from '../OrderDetails';

export function Cart() {
  const { endPointResultProcessed, productPriceTotal, removeItem, openModal } = useContext(AppContext)

  const cartEmptyText = <div className="emptyCart-message">O seu carrinho está vazio <span>Não sabe o que comprar? Milhões de produtos esperam por você!</span></div>

  return (
    <>
      <Header />
      <Container>
        {endPointResultProcessed.length !== 0 ? (
          endPointResultProcessed.map((product, key) => (
            <div key={key} className="content">
              <div className="products">
                <div className="products-details">
                  <img src={product.thumbnail} alt="Imagem do produto" />
                  <div className="product-infos">
                    <h2 >{product.title}</h2>
                    <h3>R$ {product.price}</h3>
                  </div>
                </div>
              </div>
              <div className="remove-product">
                <button onClick={() => removeItem(product.id, product.price)}>
                  <img src={ trashImg } alt="Remover produto" />
                </button>
              </div>
            </div>
          ))
        ) : cartEmptyText}
        <div className="subtotal">
          <button onClick={openModal}>Finalizar pedido</button>
          <p><span>Total</span> R$ {parseFloat(productPriceTotal).toFixed(2).replace('.', ',')}</p>
        </div>
      </Container>
      <OrderDetails />
    </>
  )
}
