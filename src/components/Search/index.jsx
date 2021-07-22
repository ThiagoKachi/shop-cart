import React from 'react';

import { Container } from './styles';

import searchImg from '../../assets/loupe.png'

export function Search() {
  return (
    <Container>
      <input
        type="text"
        placeholder="Digite sua busca..."
      />
      <button>
        <img src={ searchImg } alt="Search" />
      </button>
    </Container>
  )
}