import EReact from 'ereact';
import Router from '../router-core';

const DEFAULT_URL = '/';

class BrowserRouter extends EReact.Component {
  constructor(props) {
    super(props);

    const mode = this.props.mode === 'history' ? 'history' : 'hash';
    Router.config({ mode }).listen();

    this.addRoutePath = this.addRoutePath.bind(this);

    this.state = { url: DEFAULT_URL };
  }

  componentDidMount() {
    const url = Router.current();
    this.setState({ url });
  }

  getChildContext() {
    return {
      url: this.state.url,
      addRoutePath: this.addRoutePath
    };
  }

  addRoutePath(path) {
    Router.add(path, url => this.setState({ url }));
    console.log(Router.routes);
  }

  render() {
    return this.props.children;
  }
}

export default BrowserRouter;
