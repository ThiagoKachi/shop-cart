import React, { useContext } from 'react';

import { Container } from './styles';
import searchImg from '../../assets/loupe.png'

import { AppContext } from '../../context/AppContext';

export function Search() {
  const { productName, setProductName, getProduts } = useContext(AppContext)

  return (
    <Container>
      <input
        type="text"
        placeholder="Digite sua busca..."
        value={ productName }
        onChange={(e) => setProductName(e.target.value)}
      />
      <button type="button" onClick={ getProduts }>
        <img src={ searchImg } alt="Search" />
      </button>
    </Container>
  )
}