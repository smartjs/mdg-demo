import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App
  } from 'containers';

export default (store) => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App} />
  );
};
