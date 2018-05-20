import React from 'react';
import Home from './components/Home';
import UserList from './components/pages/UserListPage';

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    ...UserList,
    path: '/user'
  }
];