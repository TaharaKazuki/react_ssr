import React from 'react';
import App from './App';
import Home from './components/Home';
import UserList from './components/pages/UserListPage';

export default [
  {
    ...App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        ...UserList,
        path: '/user'
      }
    ]
  }
];
