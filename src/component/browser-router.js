import EReact from 'ereact';
import Router from '../router-core';

const DEFAULT_ROUTE = { path: '/' };

class BrowserRouter extends EReact.Component {
  constructor(props) {
    super(props);

    const mode = this.props.mode === 'history' ? 'history' : 'hash';
    Router.config({ mode }).listen();

    this.onChangeRouteContext = this.onChangeRouteContext.bind(this);

    this.state = {
      currentRoute: DEFAULT_ROUTE,
      onChangeRouteContext: this.onChangeRouteContext
    };
  }

  componentDidMount() {
    const currentPath = Router.current();
    this.onChangeRouteContext(currentPath);
  }

  getChildContext() {
    return this.state;
  }

  onChangeRouteContext(path) {
    this.setState({
      currentRoute: { path },
      onChangeRouteContext: this.onChangeRouteContext
    });
  }

  render() {
    return this.props.children || null;
  }
}

export default BrowserRouter;
