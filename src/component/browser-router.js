import EReact from 'ereact';
import Router from '../router-core';

const DEFAULT_URL = '/';

class BrowserRouter extends EReact.Component {
  constructor(props) {
    super(props);

    const mode = this.props.mode === 'history' ? 'history' : 'hash';
    Router.config({ mode }).listen();

    this.addRoutePath = this.addRoutePath.bind(this);

    this.state = { url: DEFAULT_URL, search: '' };
  }

  componentDidMount() {
    const url = Router.current();
    const search = Router.getUrlSearch();
    this.setState({
      url,
      search
    });
  }

  getChildContext() {
    return {
      url: this.state.url,
      search: this.state.search,
      addRoutePath: this.addRoutePath
    };
  }

  addRoutePath(path) {
    Router.add(path, url => this.setState({ url }));
  }

  render() {
    return this.props.children;
  }
}

export default BrowserRouter;
