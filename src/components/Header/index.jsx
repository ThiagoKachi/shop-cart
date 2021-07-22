import React from 'react';

import logoImg from '../../assets/online-shop.png';
import cartImg from '../../assets/cart.svg';

import { Container } from './styles';
import { Search } from '../Search';

export function Header() {
  return (
    <Container>
      <div className="logo-info">
        <p>TKstore</p>
        <a href="/">
          <img src={ logoImg } alt="Logo" />
        </a>
      </div>
      <Search />
      <div className="cart">
        <p>Meu carrinho</p>
        <a href="/">
          <img src={ cartImg } alt="Carrinho" />
        </a>
      </div>
    </Container>
  )
}