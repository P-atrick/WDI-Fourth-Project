import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import IndexSearchBar from './IndexSearchBar';

class MeteoritesIndex extends Component {

  state = {
    meteorites: [],
    sortBy: '',
    sortDirection: ''
  }

  componentWillMount() {
    Axios
      .get('/api/meteorites')
      .then(res => this.setState({ meteorites: res.data }))
      .catch(err => console.log(err));
  }

  handleSort = e => {
    const [sortBy, sortDirection] = e.target.value.split('|');
    this.setState({ sortBy, sortDirection });
  }

  sortFilter() {
    const { sortBy, sortDirection } = this.state;

    const orderedMeteorites = _.orderBy(this.state.meteorites, [sortBy], [sortDirection]);
    return orderedMeteorites;
  }

  render() {
    const meteorites = this.sortFilter();
    return(
      <div>
        <IndexSearchBar
          handleSort={ this.handleSort }
        />
        <div className="columns is-multiline">
          {meteorites.map(meteorite => {
            return(
              <div key={meteorite.id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`/meteorites/${meteorite.id}`}>
                  <img src={meteorite.image} className="image-square"/>
                  <h3 className="meteorite-info">{meteorite.name} - {meteorite.weight}g</h3>
                </Link>

              </div>
            );
          })}
        </div>
      </div>
    );
  }

}

export default MeteoritesIndex;
