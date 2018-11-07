const pathToRegexp = require('./path-to-regexp');
const clearEndSlash = (path = '') => path.toString().replace(/\/$/, '') || '/';

const Router = {
  routes: [],
	mode: null,
  config: (options) => {
		Router.mode = options && options.mode && options.mode === 'history' && !!history.pushState ? 'history' : 'hash';
		return Router;
  },
  add: (path, handler) => {
		Router.routes.push({ path: clearEndSlash(path), handler });
		return Router;
	},
	remove: (path) => {
		Router.routes.forEach((route, index) => {
			if (route.path === clearEndSlash(path)) {
				Router.routes.splice(index, 1);
			}
		});
		return Router;
	},
  match: (path, url) => {
		const reg = pathToRegexp(path);
		return reg.test(url);
	},
  current: () => {
		if (Router.mode === 'history') {
      return location.pathname;
    }

    return location.hash;
	},
	listen: () => {
		let currentUrl = Router.current();

		const fn = () => {
			const nextUrl = Router.current();
			if (nextUrl !== currentUrl) {
				currentUrl = nextUrl;

				const routes = Router.routes.filter(route => Router.match(route.path, currentUrl));
				routes.forEach(route => route.handler(currentUrl));
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
  navigate: url => {
		if (Router.mode === 'history') {
			history.pushState(null, null, url);
		} else {
			window.location.href = window.location.href.replace(/#(.*)$/, '') + url;
		}
	},
	getUrlParams: (path, url) => {
		const keys = [];
    const reg = pathToRegexp(path, keys);
		const params = {};
    const values = url.match(reg);
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
