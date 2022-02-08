import React from 'react';
import '@turnerskunkworks/turner-modernizr-webp/webp';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/styles.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
