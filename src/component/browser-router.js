import React from 'react';
import Router from '../router-core';
import { LinkContext, RouteContext } from '../context';

const DEFAULT_ROUTE = { path: '/' };

class BrowserRouter extends React.Component {
  constructor(props) {
    super(props);

    const mode = this.props.mode === 'history' ? 'history' : 'hash';
    Router.config({ mode }).listen();

    this.state = { currentRoute: DEFAULT_ROUTE  };

    this.onChangeRouteContext = this.onChangeRouteContext.bind(this);
  }

  componentDidMount() {
    const currentPath = Router.getCurrentPath();
    this.onChangeRouteContext(currentPath);
  }

  onChangeRouteContext(path) {
    if (path !== this.state.currentRoute.path) {
      this.setState({
        currentRoute: {
          path
        }
      });
    }
  }

  render() {
    return (
      <RouteContext.Provider value={this.state.currentRoute}>
        <LinkContext.Provider value={this.onChangeRouteContext}>
          { this.props.children }
        </LinkContext.Provider>
      </RouteContext.Provider>
    )
  }
}

export default BrowserRouter;
