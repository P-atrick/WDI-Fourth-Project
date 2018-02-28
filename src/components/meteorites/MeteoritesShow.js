import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import CommentsForm from '../comments/CommentsForm';
import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';

class MeteoritesShow extends Component {

  state= {
    meteorite: {},
    comments: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/meteorites/${this.props.match.params.id}`)
      .then(res => this.setState({ meteorite: res.data }))
      .catch(err => console.log(err));
  }

  deleteMeteorite = () => {
    Axios
      .delete(`/api/meteorites/${this.props.match.params.id}`,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
        })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  handleChange = () => {

  }

  handleSubmit = () => {

  }

  render() {
    let isCurrentUsers = null;
    if (this.state.meteorite.createdBy) isCurrentUsers = Auth.getPayload().userId === this.state.meteorite.createdBy.id;

    return(
      <div className="columns is-multiline">
        <div className="column is-half">
          <img src={this.state.meteorite.image} />
        </div>
        <div className="column is-half">
          <h1>{this.state.meteorite.name}</h1>
          <h4>Found on {this.state.meteorite.found}</h4>
          { this.state.meteorite.createdBy && <h4>By {this.state.meteorite.createdBy.username}</h4> }
          <h4>{this.state.meteorite.type}</h4>
          <h4>H {this.state.meteorite.height}cm x L {this.state.meteorite.length}cm x W {this.state.meteorite.width}cm</h4>
          <h4>{this.state.meteorite.weight}g</h4>

          <p>{this.state.meteorite.comments}</p>
          <BackButton history={this.props.history} />
        </div>
        <div className="column is-half">
          { Auth.isAuthenticated() && isCurrentUsers && <Link className="button" to={`/meteorites/${this.state.meteorite.id}/edit`}>
          Edit</Link> }
          {' '}
          { Auth.isAuthenticated() && isCurrentUsers && <button className="button" onClick={this.deleteMeteorite}>
          Delete</button>}
        </div>
        <CommentsForm
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit }
        />
      </div>
    );
  }

}

{/* Auth.getPayload().userId === this.state.meteorite.createdBy.id */}

export default MeteoritesShow;
