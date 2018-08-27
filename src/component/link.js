import React from 'react';
import Router from '../router-core';
import { LinkContext } from '../context';

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

    return (
      <LinkContext.Consumer>
        { fn => {
          if (!this.handler) {
            this.handler = fn;
            const path = to;
            Router.add(path, () => this.handler(path));
          }
          return <a href={to} onClick={this.onClickLink}>{children}</a>
        }}
      </LinkContext.Consumer>
    )
  }
}

export default Link;
