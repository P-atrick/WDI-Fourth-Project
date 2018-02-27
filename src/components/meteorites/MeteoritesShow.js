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
      <h1>Meteorites Show</h1>
    );
  }

}

export default MeteoritesShow;
