import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import moment from 'moment';

import CommentsForm from '../comments/CommentsForm';
import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';

class MeteoritesShow extends Component {

  state= {
    meteorite: {},
    newComment: {
      content: ''
    }
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
      .then(this.props.history.push('/meteorites'))
      .catch(err => console.log(err));
  }

  deleteComment = (id) => {
    Axios
      .delete(`/api/meteorites/${this.props.match.params.id}/comments/${id}`,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
        })
      .then(() => {
        const comments = this.state.meteorite.comments.filter(comment => comment._id !== id);


        const meteorite = Object.assign({}, this.state.meteorite, { comments });
        this.setState({ meteorite });
      })
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { value }}) => {
    this.setState({ newComment: { content: value }});
  }

  handleSubmit = e => {
    e.preventDefault();
    Axios
      .post(`/api/meteorites/${this.state.meteorite.id}/comments`, this.state.newComment,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
      .then((res) => {
        const meteorite = Object.assign({}, this.state.meteorite, { comments: this.state.meteorite.comments.concat(res.data) });
        this.setState({ meteorite, newComment: { content: '' } });
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  listForSale = () => {
    Axios
      .put(`/api/meteorites/${this.props.match.params.id}`, { forSale: 'yes' }, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(res => {
        const meteorite = Object.assign({}, this.state.meteorite, { forSale: res.data.forSale });
        this.setState({ meteorite });
      })
      .catch(err => console.log(err));
  }

  removeFromSale = () => {
    Axios
      .put(`/api/meteorites/${this.props.match.params.id}`, { forSale: 'no' }, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(res => {
        const meteorite = Object.assign({}, this.state.meteorite, { forSale: res.data.forSale });
        this.setState({ meteorite });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.meteorite);
    let isCurrentUsers = null;
    if (Auth.isAuthenticated() && this.state.meteorite.createdBy) isCurrentUsers = Auth.getPayload().userId === this.state.meteorite.createdBy.id;

    return(
      <div className="columns is-multiline navbar-margin container">
        <div className="column is-half">
          <img src={this.state.meteorite.image} className="image-square-show"/>
        </div>
        <div className="column is-half">
          <h1>{this.state.meteorite.name}</h1>

          <div className="margin-bottom">
            { Auth.isAuthenticated() && isCurrentUsers && <Link className="button is-link" to={`/meteorites/${this.state.meteorite.id}/edit`}>
            Edit</Link> }
            {' '}
            { Auth.isAuthenticated() && isCurrentUsers && <button className="button show-button is-danger" onClick={this.deleteMeteorite}>
            Delete</button>}
            { Auth.isAuthenticated() && isCurrentUsers && this.state.meteorite.forSale === 'no' && <button className="button show-button is-success" onClick={this.listForSale}>
            List for Sale</button>}
            { Auth.isAuthenticated() && isCurrentUsers && this.state.meteorite.forSale === 'yes' && <button className="button show-button is-danger" onClick={this.removeFromSale}>
            Remove from sale</button>}
          </div>

          { this.state.meteorite.createdBy && <h4>Found by <a href={`/users/${this.state.meteorite.createdBy.id}`}>{this.state.meteorite.createdBy.username}</a> on {moment(this.state.meteorite.found).format('MMMM Do YYYY')}</h4> }
          { this.state.meteorite.forSale && <h4>On sale for £{this.state.meteorite.price}</h4> }
          <h5>Type: {this.state.meteorite.type}</h5>
          <h5>Weight: {this.state.meteorite.weight}g</h5>
          <h5>H {this.state.meteorite.height}cm x L {this.state.meteorite.length}cm x W {this.state.meteorite.width}cm</h5>
          <BackButton history={this.props.history} />
          <hr />


          <div className="columns container">
            <div className="column is-full">
              {this.state.meteorite.comments && this.state.meteorite.comments.map(comment => {
                return(
                  <div key={comment._id} className="comment">
                    <p>{comment.content} </p>
                    <p><strong>{comment.createdBy.username}</strong></p>
                    { Auth.isAuthenticated() && Auth.getPayload().userId === comment.createdBy.id && <button className="button is-small" onClick={() => this.deleteComment(comment._id)}>
                    Delete</button>}
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        { Auth.isAuthenticated() &&
        <div className="column is-one-third is-offset-half">
          <CommentsForm
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
            newComment={ this.state.newComment }
          />
        </div>
        }
      </div>
    );
  }

}

export default MeteoritesShow;
