import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css';
import { Provider } from './context/AppProvider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
