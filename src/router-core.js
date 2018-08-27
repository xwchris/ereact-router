// remove the end slash of path
const clearEndSlash = (path = '') => path.toString().replace(/\/$/, '') || '/';

const Router = {
  routes: [],
  mode: null,
  // router init config
  config: (options) => {
    Router.mode = options && options.mode && options.mode === 'history' && !!history.pushState ? 'history' : 'hash';
    return Router;
  },
  // add a route
  add: (path, handler) => {
    Router.routes.push({ path: clearEndSlash(path), handler });
    return Router;
  },
  // remove a route
  remove: (path) => {
    Router.routes.forEach((route, index) => {
      if (route.path === clearEndSlash(path)) {
        Router.routes.splice(index, 1);
      }
    });
    return Router;
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
        const currentRoute = Router.routes.filter(route => route.path === nextPath)[0] || { path: '', handler: () => {} }
        currentRoute.handler();
      }
    }
    clearInterval(Router.interval);
    Router.interval = setInterval(fn, 50);
    return Router;
  }
}

export default Router;
