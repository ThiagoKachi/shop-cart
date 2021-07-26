import React, { useContext } from 'react';

import { Header } from '../Header';
import { AppContext } from '../../context/AppContext';
import { Container } from './style';
import trashImg from '../../assets/trash.svg';

export function Cart() {
  const { endPointResultProcessed } = useContext(AppContext)

  const cartEmptyText = <p className="emptyCart-message">O seu carrinho está vazio <span>Não sabe o que comprar? Milhões de produtos esperam por você!</span></p>

  return (
    <>
      <Header />
      <Container>
        {endPointResultProcessed.length === 0 ? <p>{cartEmptyText}</p> : (
          endPointResultProcessed.map((product, key) => (
            <>
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
                  <button>
                    <img src={ trashImg } alt="Remover produto" />
                  </button>
                </div>
              </div>
            </>
          ))
        )}
        <div className="subtotal">
          <button>Finalizar pedido</button>
          <p><span>Total</span> R$ 1234</p>
        </div>
      </Container>
    </>
  )
}
