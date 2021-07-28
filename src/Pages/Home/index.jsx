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

// Mudar home page? (Colocar categorias)

// Persistir dados ao recarregar a página(localstorage)
// Fazer inifinit scroll na aplicação? 
// Deixar o mais responsível que conseguir