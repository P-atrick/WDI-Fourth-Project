import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SaleSearchBar from './SaleSearchBar';

class MeteoritesSale extends Component {

  state = {
    meteorites: [],
    sortBy: '',
    sortDirection: '',
    query: ''
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

  handleSearch = e => {
    this.setState({ query: e.target.value });
  }

  sortFilter() {
    const { sortBy, sortDirection, query } = this.state;
    const regex = new RegExp(query, 'i');

    const orderedMeteorites = _.orderBy(this.state.meteorites, [sortBy], [sortDirection]);
    const forSaleMeteorites = _.filter(orderedMeteorites, [ 'forSale', 'yes' ]);
    const meteorites = _.filter(forSaleMeteorites, (meteorite) => regex.test(meteorite.name));
    return meteorites;
  }

  render() {
    const meteorites = this.sortFilter();
    return(
      <div className="container is-fluid">
        <SaleSearchBar
          handleSort={ this.handleSort }
          handleSearch={ this.handleSearch }
        />

        <div className="columns is-multiline">
          {meteorites.map(meteorite => {
            return(
              <div key={meteorite.id} className="column is-one-fifth-desktop is-one-quarter-tablet">
                <Link to={`/meteorites/${meteorite.id}`}>
                  <img src={meteorite.image} className="image-square"/>
                </Link>
                <h4 className="meteorite-info">{meteorite.name} - {meteorite.weight}g</h4>
                <h4 className="meteorite-info">£{meteorite.price}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

}

export default MeteoritesSale;
