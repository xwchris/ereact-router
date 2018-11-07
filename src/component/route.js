import { createElement } from '../../src/render';
import { Component } from '../../src/component';
import Router from '../router-core';

class Route extends Component {
  constructor(props, context) {
    super(props, context);

    const { addRoutePath } = this.context;
    addRoutePath(this.props.path);
  }

  render() {
    const {
      exact = false,
      path = '',
      component: RenderedComponent = () => <div></div>
    } = this.props;

    const url = this.context.url;

    if (exact ? path === url : Router.match(path, url)) {
      const params = Router.getUrlParams(path, url) || {};
      return <RenderedComponent match={{ params }} />
    }

    return <div></div>;
  }
}

export default Route;
