import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import { Container } from './styles';
import Modal from 'react-modal';
import checkImg from '../../assets/check.png';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    overlfow: 'scroll'
  },
};

export function OrderDetails() {
  const { endPointResultProcessed, productPriceTotal, modalIsOpen, backToShop } = useContext(AppContext)

  const cartEmptyText = <div className="emptyCart-message">O seu carrinho está vazio <span>Não sabe o que comprar? Milhões de produtos esperam por você!</span></div>

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
      >
        <Container>
          {endPointResultProcessed.length !== 0 ? (
            <>
              <div className="finish-order">
                <img src={ checkImg } alt="Pedido Finalizado" />
                <h1>Pedido Finalizado</h1>
              </div>
              {endPointResultProcessed.map((product, key) => (
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
                </div>
              ))}
            </>
            ) : cartEmptyText}
            <div className="subtotal">
              <Link to="/">
                <button onClick={backToShop} className="back-to-shopping">Voltar as compras</button>
              </Link>
              <p><span>Total</span> R$ {parseFloat(productPriceTotal).toFixed(2).replace('.', ',')}</p>
            </div>
        </Container>
      </Modal>
    </>
  )
}
