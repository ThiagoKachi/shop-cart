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

// Ao clicar no botão "Finalizar pedido", levar o usuário a uma página de agradecimento pela compra
// Mudar home page?

// Persistir dados ao recarregar a página(localstorage)
// Fazer inifinit scroll na aplicação? 