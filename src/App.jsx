import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Cart } from './components/Cart';

function App() {
  return (
    <Switch >
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  )
}

export default App;
