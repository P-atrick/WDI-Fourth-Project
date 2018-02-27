import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';

class MeteoritesShow extends Component {

  state= {
    meteorite: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/meteorites/${this.props.match.params.id}`)
      .then(res => this.setState({ meteorite: res.data }))
      .catch(err => console.log(err));
  }

  deleteMeteorite = () => {
    Axios
      .delete(`/api/meteorites/${this.props.match.params.id}`,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
        })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <div>
          <img src={this.state.meteorite.image} />
        </div>
        <div>
          <h2>{this.state.meteorite.name}</h2>
          <h4>{this.state.meteorite.type}</h4>
          <h4>{this.state.meteorite.weight}</h4>

          <BackButton history={this.props.history} />
          { Auth.isAuthenticated() && <Link to={`/meteorites/${this.state.meteorite.id}/edit`}>
          Edit</Link> }
          {' '}
          { Auth.isAuthenticated() && <button onClick={this.deleteMeteorite}>
          Delete</button>}
        </div>
      </div>
    );
  }

}

export default MeteoritesShow;
