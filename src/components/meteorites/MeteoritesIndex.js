import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import IndexSearchBar from './IndexSearchBar';

class MeteoritesIndex extends Component {

  state = {
    meteorites: [],
    sortBy: '',
    sortDirection: '',
    query: ''
  }

  componentDidMount() {
    Axios
      .get('/api/meteorites')
      .then(res => this.setState({ meteorites: res.data }))
      .catch(err => console.log(err));
  }

  handleSort = e => {
    const [sortBy, sortDirection] = e.target.value.split('|');
    this.setState({ sortBy, sortDirection });
  }

  handleSearch = e => {
    this.setState({ query: e.target.value });
  }

  sortFilter() {
    const { sortBy, sortDirection, query } = this.state;
    const regex = new RegExp(query, 'i');

    const orderedMeteorites = _.orderBy(this.state.meteorites, [sortBy], [sortDirection]);
    const meteorites = _.filter(orderedMeteorites, (meteorite) => regex.test(meteorite.name));
    return meteorites;
  }

  render() {
    const meteorites = this.sortFilter();
    return(
      <div className="container is-fluid">
        <IndexSearchBar
          handleSort={ this.handleSort }
          handleSearch={ this.handleSearch }
        />
        <div className="columns is-multiline">
          {meteorites.map(meteorite => {
            return(
              <div key={meteorite.id} className="column is-one-fifth-desktop is-one-quarter-tablet">
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
