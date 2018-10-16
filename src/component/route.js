import EReact from 'ereact';
import Router from '../router-core';

class Route extends EReact.Component {
  constructor(props, context) {
    super(props, context);

    const { pathname, onChangeRouteContext } = this.context;
    const handler = onChangeRouteContext;
    Router.add(pathname, path => handler(path));
  }

  render() {
    const {
        exact = false,
        path: pathname = '',
        component: RenderedComponent = () => {}
      } = this.props;

    const currentRoute = this.context.currentRoute || {};
    const path = currentRoute.path;

    if (exact ? pathname === path : Router.match(pathname, path)) {
      const pathParser = Route.getPathParamsParser(pathname);
      const params = Router.getPathParams(pathParser, path) || {};
      return <RenderedComponent match={{ params }} />
    }

    return null;
  }
}

export default Route;
