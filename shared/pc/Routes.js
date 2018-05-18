import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Common from 'shared/common/components/Common';

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home}/>
    </div>
  )
};