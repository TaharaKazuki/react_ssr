/* App.js */

import React from 'react';
import { renderRoutes } from 'react-router-config';

export default {
  component: ({ route }) => (
    <div>
      <h1>header</h1>
      <div>{renderRoutes(route.routes)}</div>
    </div>
  ),
};
