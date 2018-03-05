import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SaleSearchBar from './SaleSearchBar';

class MeteoritesSale extends Component {

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
    const meteorites = _.filter(orderedMeteorites, [ 'forSale', true ]);
    return meteorites;
  }

  render() {
    const meteorites = this.sortFilter();
    return(
      <div>
        <SaleSearchBar
          handleSort={ this.handleSort }
        />

        <div className="columns is-multiline">
          {meteorites.map(meteorite => {
            return(
              <div key={meteorite.id} className="column is-one-quarter-desktop is-one-third-tablet">
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
