const pathToRegexp = require('./path-to-regexp');
const clearEndSlash = (path = '') => path.toString().replace(/\/$/, '') || '/';

const Router = {
  routes: [],
	mode: null,
  config: (options) => {
		Router.mode = options && options.mode && options.mode === 'history' && !!history.pushState ? 'history' : 'hash';
		return Router;
  },
  add: (pathname, handler) => {
		Router.routes.push({ pathname: clearEndSlash(pathname), handler });
		return Router;
	},
	remove: (pathname) => {
		Router.routes.forEach((route, index) => {
			if (route.pathname === clearEndSlash(pathname)) {
				Router.routes.splice(index, 1);
			}
		});
		return Router;
	},
  match: (pathname, path) => {
		const reg = pathToRegexp(pathname);
		return reg.test(path);
	},
  current: () => {
		if (Router.mode === 'history') {
      return location.pathname;
    }

    return location.hash;
	},
	listen: () => {
		let currentPath = Router.current();

		const fn = () => {
			const nextPath = Router.current();
			if (nextPath !== currentPath) {
				currentPath = nextPath;

				const routes = Router.routes.filter(route => Router.match(route.pathname, currentPath));
				routes.forEach(route => route.handler(currentPath));
			}
		}

		clearInterval(Router.interval);
		Router.interval = setInterval(fn, 50);
		return Router;
  },
  flush: () => {
    Router.routes = [];
    Router.mode = null;
    Router.root = '/';
    return Router;
  },
  navigate: path => {
		if (Router.mode === 'history') {
			history.pushState(null, null, path);
		} else {
			window.location.href = window.location.href.replace(/#(.*)$/, '') + path;
		}
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
  }
}

export default Router;
