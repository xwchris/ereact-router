import React from 'react';
import { RouteContext } from '../context';

const Route = ({ path = '', component: RenderedComponent = () => {} }) => (
  <RouteContext.Consumer>
    { route => route.path === path ? <RenderedComponent /> : null }
  </RouteContext.Consumer>
);

export default Route;
