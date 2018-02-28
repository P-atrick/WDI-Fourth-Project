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
      <div>
        <div>
          <h1>Sale page</h1>
          {this.state.meteorites.map(meteorite => {
            return(
              <div key={meteorite.id}>
                <Link to={`/meteorites/${meteorite.id}`}>
                  <img src={meteorite.image} />
                </Link>
                <p>£{meteorite.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

}

export default MeteoritesSale;
