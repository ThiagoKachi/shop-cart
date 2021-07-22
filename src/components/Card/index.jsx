import React from 'react';

import { getProductsList } from '../../services';

export function Card() {
  async function getProduts() {
    const teste = await getProductsList('iphone');
    console.log(teste)
  }

  return (
    <p onClick={getProduts}>Ola</p>
  )
}

// Guardar o valor digitado no input em um estado, no componente Search
// Compartilhar esse estado com o component Card e colocá-lo na chamada da api
