import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/pages/UserListPage';

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/user" component={UserList}/>
    </div>
  )
};