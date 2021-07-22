import React, { useContext, useState } from 'react';

import { getProductsList } from '../../services';
import { AppContext } from '../../context/AppContext';

import { Container } from './styles';

export function Card() {
  const { productName } = useContext(AppContext)

  const [productsDetail, setProductDetail] = useState([]);

  async function getProduts() {
    const productsList = await getProductsList(productName);
    setProductDetail(productsList);
  }

  return (
    <Container>
      <p onClick={getProduts}>teste</p>
        {productsDetail.map(({ title, thumbnail, price, id, original_price }) => (
          <div className="card" key={ id }>
            <img src={ thumbnail } alt="Foto do produto" />
            <div className="infos">
              <h1>{ title }</h1>
              <div className="prices">
                <p>R$ { price }</p>
                {original_price === null ? '' : <span className="original_price">R$ {original_price}</span>}
              </div>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        ))}
        {console.log(productsDetail)}
    </Container>
  )
}

// Fazer o botao de busca funcionar
// Pegar o id do produto ao clicar em "Adicionar ao carrinho"
// usar esse id no carrinho para buscar infos do produto
// Usar o endpoint "https://api.mercadolibre.com/items/$ItemID"
