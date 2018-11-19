import EReact from 'ereact';
import Router from '../router-core';

let hasAdded = false;

class Route extends EReact.Component {
  constructor(props, context) {
    super(props, context);

    const { addRoutePath } = this.context;
    if (!hasAdded) {
      addRoutePath(this.props.path);
      hasAdded = true;
    }
  }

  render() {
    const {
      exact = false,
      path = '',
      component: RenderedComponent = () => <div></div>
    } = this.props;

    const { url, search } = this.context;

    if (exact ? path === url : Router.match(path, url)) {
      const params = Router.getUrlParams(path, url) || {};

      return <RenderedComponent match={{ params, search }} />
    }

    return <div></div>;
  }
}

export default Route;
