import React from 'react';

import { Header } from './components/Header';
import { Card } from './components/Card';
import { Provider } from './context/AppProvider';

function App() {
  return (
    <Provider>
      <Header />
      <Card />
    </Provider>
  );
}

export default App;
