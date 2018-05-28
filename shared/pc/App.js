/* App.js */
import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from 'shared/pc/components/templates/Header';

export default {
  component: ({ route }) => (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  ),
};
