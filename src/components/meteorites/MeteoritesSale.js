import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

class MeteoritesSale extends Component {

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
      <div className="columns is-multiline is-mobile">
        {this.state.meteorites.map(meteorite => {
          return(
            <div key={meteorite.id} className="column is-one-quarter">
              <Link to={`/meteorites/${meteorite.id}`}>
                <img src={meteorite.image} />
              </Link>
              <h3><strong>£{meteorite.price}</strong></h3>
            </div>
          );
        })}
      </div>
    );
  }

}

export default MeteoritesSale;
