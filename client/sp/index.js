import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'shared/sp/Routes';
import reducers from 'shared/pc/reducers';

const store = createStore(reducers);
const rootElement = document.getElementById('root');

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>,
  rootElement
);