import React from 'react';

import logoImg from '../../assets/online-shop.png';
import cartImg from '../../assets/cart.svg';
import { Link } from 'react-router-dom';

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
      <Link to="/cart" className="link-button">
        <div className="cart">
            <p>Meu carrinho</p>
            <img src={ cartImg } alt="Carrinho" />
        </div>
      </Link>
    </Container>
  )
}