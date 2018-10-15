import EReact from 'ereact';
import Router from '../router-core';

class Route extends EReact.Component {
  constructor(props) {
    super(props);

    const handler = this.props.onChangeRouteContext;
    Router.add(this.props.pathname, path => handler(path));
  }

  render() {
    const {
        exact = false,
        currentRoute,
        path: pathname = '',
        component: RenderedComponent = () => {}
      } = this.props;

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
