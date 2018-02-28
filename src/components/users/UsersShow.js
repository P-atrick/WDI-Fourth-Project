import React, { Component } from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';

class UsersShow extends Component {

  state = {
    user: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
        })
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <h1>{ this.state.user.username }</h1>
        <button className="button">{`See ${this.state.user.username}'s uploaded meteorites`}</button>
        <button className="button">{`See ${this.state.user.username}'s meteorites for sale`}</button>
      </div>
    );
  }
}

export default UsersShow;
