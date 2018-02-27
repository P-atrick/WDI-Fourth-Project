import React from 'react';
import Axios from 'axios';

import MeteoritesForm from './MeteoritesForm';
import Auth from '../../lib/Auth';

class MeteoritesNew extends React.Component {
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
      image: ''
    }
  };

  handleChange = ({ target: { name, value } }) => {
    const meteorite = Object.assign({}, this.state.meteorite, { [name]: value });
    this.setState({ meteorite });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/meteorite', this.state.meteorite,
        {
          headers: {'Authorization': `Bearer ${Auth.getToken()}`}
        })
      .then(() => this.props.history.push('/'))
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

export default MeteoritesNew;
