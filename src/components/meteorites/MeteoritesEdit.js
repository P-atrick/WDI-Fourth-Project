import React from 'react';
import Axios from 'axios';

import MeteoritesForm from './MeteoritesForm';
import Auth from '../../lib/Auth';

class MeteoritesEdit extends React.Component {
  state = {
    meteorite: {
      name: '',
      weight: '',
      height: '',
      length: '',
      width: '',
      location: '',
      type: '',
      found: '',
      image: '',
      price: ''
    }
  };

  componentDidMount() {
    Axios
      .get(`/api/meteorites/${this.props.match.params.id}`)
      .then(res => this.setState({ meteorite: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const meteorite = Object.assign({}, this.state.meteorite, { [name]: value });
    this.setState({ meteorite });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/meteorites/${this.props.match.params.id}`, this.state.meteorite,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
        })
      .then(res => this.props.history.push(`/meteorites/${res.data.id}`))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <MeteoritesForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        meteorite={this.state.meteorite}
      />
    );
  }
}

export default MeteoritesEdit;
