import React from 'react';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export function Home() {
  return (
    <>
      <Header searchBar myCart categories />
      <Card />
    </>
  ) 
}
