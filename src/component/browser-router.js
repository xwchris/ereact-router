import React from 'react';
import Router from '../router-core';
import { RouteContext } from '../context';

const DEFAULT_ROUTE = { path: '/' };

class BrowserRouter extends React.Component {
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
    const currentPath = Router.getCurrentPath();
    this.onChangeRouteContext(currentPath);
  }

  onChangeRouteContext(path) {
    this.setState({
      currentRoute: { path },
      onChangeRouteContext: this.onChangeRouteContext
    });
  }

  render() {
    return (
      <RouteContext.Provider value={this.state}>
        { this.props.children }
      </RouteContext.Provider>
    )
  }
}

export default BrowserRouter;
