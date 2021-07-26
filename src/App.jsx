import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Home } from './Pages/Home';
import { Cart } from './Pages/Cart';
import { NotFound } from './Pages/NotFound';

function App() {
  return (
    <Switch >
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route component={ NotFound } />
    </Switch>
  )
}

export default App;
