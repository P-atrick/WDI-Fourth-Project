import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

class MeteoritesIndex extends Component {

  state = {
    meteorites: []
  }

  componentWillMount() {
    Axios
      .get('/api/meteorites')
      .then(res => this.setState({ meteorites: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <h1>Meteorites Index</h1>
      </div>
    );
  }

}

export default MeteoritesIndex;
