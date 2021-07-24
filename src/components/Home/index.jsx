import React from 'react';

import { Header } from '../Header';
import { Card } from '../Card';

export function Home() {
  return (
    <>
      <Header searchBar myCart />
      <Card />
    </>
  ) 
}

// Mudar estilo do card?
// Fazer estilização do carrinho(cart)
// Colocar número de itens no carrinho, se não tiver nenhum, colocar uma mensagem
// Persistir dados ao recarregar a página(localstorage)
// Fazer filtro na busca(habilitar search quando o campo estiver preenchido)
// Fazer inifinit scroll na aplicação? 