// remove the end slash of path
const pathToRegexp = require('./path-to-regexp');
const clearEndSlash = (path = '') => path.toString().replace(/\/$/, '') || '/';

const Router = {
  routes: [],
  mode: null,
  // router init config
  config: (options) => {
    Router.mode = options && options.mode && options.mode === 'history' && !!history.pushState ? 'history' : 'hash';
    return Router;
  },
  match: (pathname, path) => {
    const reg = Router.getPathParamsParser(pathname).reg;
    return reg.test(path);
  },
  // add a route
  add: (pathname, handler) => {
    const route = {
      pathname: clearEndSlash(pathname),
      handler
    };

    Router.routes.push(route);
    return Router;
  },
  // remove a route
  remove: (pathname) => {
    Router.routes.forEach((route, index) => {
      if (route.path === clearEndSlash(pathname)) {
        Router.routes.splice(index, 1);
      }
    });
    return Router;
  },
  getPathParamsParser: (path) => {
    const keys = [];
    const reg = pathToRegexp(path, keys);
    return { reg, keys };
  },
  getPathParams: (paramsParser, path) => {
    const params = {};
    const { reg, keys } = paramsParser;
    const values = path.match(reg);
    if (values.length > 1) {
      values.shift();
      keys.forEach((key, index) => {
        params[key.name] = values[index];
      });
    }
    return params;
  },
  // get current path
  getCurrentPath: () => {
    if (Router.mode === 'history') {
      return location.pathname;
    }

    return location.hash;
  },
  flush: () => {
    Router.routes = [];
    Router.mode = null;
    Router.root = '/';
    return Router;
  },
  navigate: (path) => {
    const to = path || Router.getCurrentPath();
    if (Router.mode === 'history') {
      history.pushState(null, null, to);
    } else {
      window.location.href = window.location.href.replace(/#(.*)$/, '') + to;
    }
    return Router;
  },
  // listen
  listen: () => {
    let currentPath = Router.getCurrentPath();

    const fn = () => {
      const nextPath = Router.getCurrentPath();
      if (nextPath !== currentPath) {
        currentPath = nextPath;

        const currentRoutes = Router.routes.filter(route => Router.match(route.pathname, nextPath));

        currentRoutes.forEach(route => route.handler(nextPath));
      }
    }
    clearInterval(Router.interval);
    Router.interval = setInterval(fn, 50);
    return Router;
  }
}

export default Router;
