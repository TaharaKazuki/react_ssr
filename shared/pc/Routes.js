import React from 'react';
import Home from './components/Home';
import UserList, { loadData } from './components/pages/UserListPage';

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/user',
    component: UserList
  }
];