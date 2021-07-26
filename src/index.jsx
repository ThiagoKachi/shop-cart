import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css';
import { Provider } from './context/AppProvider';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
