import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'shared/pc/Routes';

const rootElement = document.getElementById('root');

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>,
  rootElement
);

