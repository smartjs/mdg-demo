import React, { Component, PropTypes } from 'react';
const { object, func, string, array } = PropTypes;
import { connect } from 'react-redux';

import connectData from 'helpers/connectData';

import { login } from 'redux/modules/currentUser';
import { load as loadSurveys } from 'redux/modules/surveys';

function fetchData(getState, dispatch) {
  const token = getState().currentUser.token;
  return token ? dispatch(loadSurveys()) : Promise.resolve();
}

@connectData(fetchData)
@connect(
  ({ currentUser, surveys }) => ({ token: currentUser.token, surveys: surveys.list }),
  { login, loadSurveys }
)
export default class App extends Component {
  static propTypes = {
    login: func.isRequired,
    loadSurveys: func.isRequired,
    surveys: array.isRequired,
    token: string,
  };

  componentWillReceiveProps(newProps) {
    if (!this.props.token && newProps.token) {
      this.props.loadSurveys();
    }
  }


  handleLogin = () => {
    this.props.login({
      username: 'Enjeru',
      password: 'cTF3MmUzcjQ=',
    });
  };

  render() {
    const { token, surveys } = this.props;
    return (
      <div>
        { token }
        { !token ? <button onClick={this.handleLogin}>Login</button> : null }
        { surveys.length ?
          (
            <ul>
              { surveys.map(({ title, _id }) => <li key={_id}>{title}</li>) }
            </ul>
          ) : null
        }
      </div>
    );
  }
}
