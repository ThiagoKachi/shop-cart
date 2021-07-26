import React from 'react';

import { Link } from 'react-router-dom';

import errorImg from '../../assets/error.png';
import { Container } from './styles';

export function NotFound() {
  return (
    <Container>
      <p className="logo">Tkstore</p>
      <img src={ errorImg } alt="Página não encontrada" />
      <p>A PÁGINA QUE VOCÊ ESTAVA PROCURANDO NÃO EXISTE!</p>
      <Link to="/" className="go-home">
        Voltar a Home
      </Link>
    </Container>
  )
}
