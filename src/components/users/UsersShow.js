import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

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
      <div className="container is-fluid navbar-margin">
        <h1>{ this.state.user.username }{"'s Profile"}</h1>

        <Link className="button is-success show-button" to={`/users/${this.props.match.params.id}/meteorites`}>{`See ${this.state.user.username}'s uploaded meteorites`}</Link>
        <Link className="button is-success" to={`/users/${this.props.match.params.id}/meteorites/sale`}>{`See ${this.state.user.username}'s meteorites for sale`}</Link>
      </div>
    );
  }
}

export default UsersShow;
