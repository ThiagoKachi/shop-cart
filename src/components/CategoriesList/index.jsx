import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';

import { Container } from './styles';
import downImg from '../../assets/down.png';

export function CategoriesList() {
  const { categoriesList, getCategoryId, open, setOpen } = useContext(AppContext);


  return (
    <Container className="nav-item dropdown">
      <button className="nav-link dropdown-toggle" onClick={() => setOpen(!open)}>
        Categorias
        <img src={ downImg } alt="Categorias" />
      </button>
      <div className={open ? "dropdown-menu show" : "dropdown-menu"}>
        {categoriesList.map(({ name, id }) => <button key={ id } onClick={() => getCategoryId(id)}>{name}</button>)}
      </div>
    </Container>
  )
}

