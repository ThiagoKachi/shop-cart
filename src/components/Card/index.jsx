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
        {productsDetail.map(({ title, thumbnail, price, id, original_price, permalink }) => (
          <div className="card" key={ id }>
            <img src={ thumbnail } alt="Foto do produto" />
            <div className="infos">
              <h1>{ title }</h1>
              {original_price === null ? '' : <span className="original_price">{original_price}</span>}
              <p>{ price }</p>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        ))}
        {console.log(productsDetail)}
    </Container>
  )
}

// Guardar o valor digitado no input em um estado, no componente Search
// Compartilhar esse estado com o component Card e colocá-lo na chamada da api
