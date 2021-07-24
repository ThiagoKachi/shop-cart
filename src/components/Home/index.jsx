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

// Mudar estilo do card?
// Pegar o id do produto ao clicar em "Adicionar ao carrinho"
// Enviar essa função para capturar id pelo estado(context)
// usar esse id no carrinho para buscar infos do produto
// Usar o endpoint "https://api.mercadolibre.com/items/$ItemID"
// Fazer filtro na busca(habilitar search quando o campo estiver preenchido)
// Fazer inifinit scroll na aplicação? 