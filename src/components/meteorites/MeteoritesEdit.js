import React from 'react';
import Axios from 'axios';
import moment from 'moment';

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
      found: moment(),
      image: '',
      price: ''
    },
    errors: {}
  };

  componentDidMount() {
    Axios
      .get(`/api/meteorites/${this.props.match.params.id}`)
      .then(res => this.setState({ meteorite: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const meteorite = Object.assign({}, this.state.meteorite, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ meteorite, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/meteorites/${this.props.match.params.id}`, this.state.meteorite,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
        })
      .then(res => this.props.history.push(`/meteorites/${res.data.id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  handleImageUpload = result => {
    const meteorite = Object.assign({}, this.state.meteorite, { image: result.filesUploaded[0].url});
    this.setState({ meteorite });
  }

  render() {
    return (
      <MeteoritesForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleImageUpload={ this.handleImageUpload }
        meteorite={this.state.meteorite}
        errors={ this.state.errors }
      />
    );
  }
}

export default MeteoritesEdit;
