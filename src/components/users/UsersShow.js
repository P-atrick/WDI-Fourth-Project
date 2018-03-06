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
    const ownProfile = Auth.getPayload().userId === this.props.match.params.id;

    return(
      <div className="container is-fluid navbar-margin">
        { ownProfile && <h1>Your Profile</h1>}
        { !ownProfile && <h1>{ this.state.user.username }{"'s Profile"}</h1>}

        { ownProfile && <Link className="button is-success show-button" to={`/users/${this.props.match.params.id}/meteorites`}>See your uploaded meteorites</Link>}
        { !ownProfile && <Link className="button is-success show-button" to={`/users/${this.props.match.params.id}/meteorites`}>{`See ${this.state.user.username}'s uploaded meteorites`}</Link>}

        { ownProfile && <Link className="button is-success" to={`/users/${this.props.match.params.id}/meteorites/sale`}>See your meteorites for sale</Link>}
        { !ownProfile && <Link className="button is-success" to={`/users/${this.props.match.params.id}/meteorites/sale`}>{`See ${this.state.user.username}'s meteorites for sale`}</Link>}
      </div>
    );
  }
}

export default UsersShow;
