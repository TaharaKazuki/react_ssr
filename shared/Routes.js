import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pc/components/Home';

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/hi" component={()=> 'hi'}/>
    </div>
  )
};