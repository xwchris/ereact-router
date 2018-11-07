import { createElement } from '../../src/render';
import { Component } from '../../src/component';
import Router from '../router-core';

class Link extends Component {
  constructor(props) {
    super(props);

    this.handler = null;
    this.onClickLink = this.onClickLink.bind(this);
  }

  onClickLink(e) {
    e.preventDefault();
    Router.navigate(this.props.to);
  }

  render() {
    const { to = '', children = null } = this.props;

    return <a href={to} onClick={this.onClickLink}>{children}</a>;
  }
}

export default Link;
