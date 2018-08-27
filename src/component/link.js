import React from 'react';
import Router from '../router-core';

class Link extends React.Component {
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
