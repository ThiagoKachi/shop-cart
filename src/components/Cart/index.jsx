import React, { useContext } from 'react';

import { Header } from '../Header';
import { AppContext } from '../../context/AppContext';

export function Cart() {
  const { endPointResultProcessed } = useContext(AppContext)

  const cartEmptyText = <p className="emptyCart">O seu carrinho está vazio <span>Não sabe o que comprar? Milhões de produtos esperam por você!</span></p>

  return (
    <>
      <Header />
      {endPointResultProcessed.length === 0 ? <p>{cartEmptyText}</p> : (
        endPointResultProcessed.map((product, key) => <p key={key}>{product.title}</p>)
      )}
    </>
  )
}
