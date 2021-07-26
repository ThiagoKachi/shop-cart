import React from 'react';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export function Home() {
  return (
    <>
      <Header searchBar myCart />
      <Card />
    </>
  ) 
}

// Criar botão para remover item do carrinho
// Mudar estilo do card
// Adicionar icone de carrinho no botão "Adicionar ao carrinho"
// Ao clicar no botão "Finalizar pedido", levar o usuário a uma página de agradecimento pela compra
// Criar página de erro 404
// Persistir dados ao recarregar a página(localstorage)
// Fazer filtro na busca(habilitar search quando o campo estiver preenchido)
// Fazer inifinit scroll na aplicação? 