import React, { useContext } from 'react';

import logoImg from '../../assets/online-shop.png';
import cartImg from '../../assets/cart.svg';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { Search } from '../Search';
import { AppContext } from '../../context/AppContext';
import { CategoriesList } from '../../components/CategoriesList';

export function Header({ searchBar, myCart, categories }) {
  const { endPointResultProcessed } = useContext(AppContext);

  return (
    <Container>
      <Link to="/" className="link-button">
        <div className="logo-info">
            <p>TKstore</p>
            <img src={ logoImg } alt="Logo" />
        </div>
      </Link>
      {searchBar ? <Search /> : <span />}
      {categories ? <CategoriesList /> : <span />}
      {myCart ? (
        <Link to="/cart" className="link-button">
          <div className="cart">
            <div className="image-title">
              <p>Meu carrinho</p>
              <img src={ cartImg } alt="Carrinho" />
            </div>
            <span>{endPointResultProcessed.length === 1 ? `${endPointResultProcessed.length} item` : `${endPointResultProcessed.length} itens`}</span>
          </div>
        </Link>
      ) : <h1 className="my-cart-title">Meu carrinho</h1>}
    </Container>
    
  )
}