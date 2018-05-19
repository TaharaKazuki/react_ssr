import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Route from 'shared/sp/Routes';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Route/>
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head></head>
        <body>
          <div id="root">${content}</div>
          <script src="bundle.js"></script>
        </body>
    </html>
  `;

};