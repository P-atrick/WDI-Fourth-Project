import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Auth from '../../lib/Auth';

import SaleSearchBar from '../meteorites/SaleSearchBar';

class UsersMeteorites extends Component {
  state = {
    meteorites: [],
    user: {},
    sortBy: '',
    sortDirection: '',
    query: ''
  }

  componentDidMount() {
    Axios
      .all([
        Axios
          .get('/api/meteorites'),
        Axios
          .get(`/api/users/${this.props.match.params.id}`,
            {
              headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
            })
      ])
      .then(Axios
        .spread((resM, resU) => {
          this.setState({ meteorites: resM.data, user: resU.data });
        }))
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
    const { sortBy, sortDirection } = this.state;

    const orderedMeteorites = _.orderBy(this.state.meteorites, [sortBy], [sortDirection]);
    const meteorites = _.filter(orderedMeteorites, (meteorite) => this.props.match.params.id === meteorite.createdBy && meteorite.forSale === 'yes');
    return meteorites;
  }

  render() {
    const meteorites = this.sortFilter();
    return(
      <div className="container is-fluid">
        <h1 className="navbar-margin">{ this.state.user.username }{"'s Meteorites for Sale"}</h1>
        <SaleSearchBar
          handleSort={ this.handleSort }
          handleSearch={ this.handleSearch }
        />
        <div className="columns is-multiline">
          {meteorites.map(meteorite => {
            return(
              <div key={meteorite.id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`/meteorites/${meteorite.id}`}>
                  <div className="index-image" style={{backgroundImage: `url('${meteorite.image}')`}}></div>
                  <h4 className="meteorite-info">{meteorite.name} - {meteorite.weight}g</h4>
                  <h4 className="meteorite-info">£{meteorite.price}</h4>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UsersMeteorites;
