import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'shared/pc/Routes';
import reducers from 'shared/common/reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));
const rootElement = document.getElementById('root');

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>,
  rootElement
);