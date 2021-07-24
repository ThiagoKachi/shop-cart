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

// Criar as rotas da aplicação(/cart)
// Pegar o id do produto ao clicar em "Adicionar ao carrinho"
// usar esse id no carrinho para buscar infos do produto
// Usar o endpoint "https://api.mercadolibre.com/items/$ItemID"
