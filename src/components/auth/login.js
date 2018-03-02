import React from 'react';
import Axios from 'axios';

import LoginForm from './LoginForm';
import Auth from '../../lib/Auth';

class Login extends React.Component {

  state = {
    user: {
      email: '',
      password: ''
    },
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ user, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (!Object.keys(this.state.user).some(key => !this.state.user[key])) {
      Axios
        .post('/api/login', this.state.user)
        .then(res => {
          Auth.setToken(res.data.token);
          this.props.history.push('/');
        })
        .catch(err => this.setState({ errors: err.response.data.errors }));
    } else {
      // add correct errors to error object in state
    }
  }

  render() {
    return (
      <LoginForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        errors={this.state.errors}
      />
    );
  }
}

export default Login;
