import React from 'react';
import Router from '../router-core';
import { RouteContext } from '../context';

let handler = null;

const Route = ({ path: pathname = '', component: RenderedComponent = () => {}, exact = false }) => (
  <RouteContext.Consumer>
    {
      state => {
        const route = state.currentRoute;
        const fn = state.onChangeRouteContext;

        if (!handler) {
          handler = fn;
          Router.add(pathname, path => {
            handler(path);
          });
        }

        const path = route.path;

        if (exact ? pathname === path : Router.match(pathname, path)) {
          const pathParser = Router.getPathParamsParser(pathname);
          const params = Router.getPathParams(pathParser, path) || {};
          return <RenderedComponent match={{ params }} />;
        }

        return null;
      }
    }
  </RouteContext.Consumer>
);

export default Route;
