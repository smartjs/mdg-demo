import React, { Component, PropTypes } from 'react';
const { object, func, string } = PropTypes;
import { connect } from 'react-redux';

import connectData from 'helpers/connectData';

import { login } from 'redux/modules/currentUser';

function fetchData() {
  return Promise.resolve();
}

@connectData(fetchData)
@connect(
  ({ currentUser }) => ({ token: currentUser.token }),
  { login }
)
export default class App extends Component {
  static propTypes = {
    children: object.isRequired,
    login: func.isRequired,
    token: string,
  };


  handleLogin = () => {
    this.props.login({
      username: 'Enjeru',
      password: 'cTF3MmUzcjQ=',
    });
  };

  render() {
    const { token } = this.props;
    return (
      <div>
        { token }
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}
