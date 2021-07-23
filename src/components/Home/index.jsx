import React from 'react';

import { Header } from '../Header';
import { Card } from '../Card';

export function Home() {
  return (
    <>
      <Header />
      <Card />
    </>
  ) 
}


// Mostrar produtos na tela inicial (Home page)
// Pegar o id do produto ao clicar em "Adicionar ao carrinho"
// usar esse id no carrinho para buscar infos do produto
// Usar o endpoint "https://api.mercadolibre.com/items/$ItemID"
