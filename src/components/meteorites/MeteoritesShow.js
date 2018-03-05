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
      .then(res => {
        const meteorite = Object.assign({}, this.state.meteorite, { comments: res.data });
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
        const meteorite = Object.assign({}, this.state.meteorite, { comments: res.data.comments });
        this.setState({ meteorite, newComment: { content: '' } });
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  listForSale = () => {
    console.log('clicked');
  }

  render() {
    console.log(this.state.meteorite);
    // console.log(Auth.getPayload().userId);
    let isCurrentUsers = null;
    if (this.state.meteorite.createdBy) isCurrentUsers = Auth.getPayload().userId === this.state.meteorite.createdBy.id;

    return(
      <div className="columns is-multiline">
        <div className="column is-half">
          <img src={this.state.meteorite.image} className="image-square-show"/>
        </div>
        <div className="column is-half">
          <h1>{this.state.meteorite.name}</h1>
          { Auth.isAuthenticated() && isCurrentUsers && <Link className="button" to={`/meteorites/${this.state.meteorite.id}/edit`}>
          Edit</Link> }
          {' '}
          { Auth.isAuthenticated() && isCurrentUsers && <button className="button" onClick={this.deleteMeteorite}>
          Delete</button>}
          { Auth.isAuthenticated() && isCurrentUsers && <button className="button" onClick={this.listForSale}>
          List for Sale</button>}
          <h4>Found on {moment(this.state.meteorite.found).format('MMMM Do YYYY')}</h4>
          { this.state.meteorite.createdBy && <h4>Found by <a href={`/users/${this.state.meteorite.createdBy.id}`}>{this.state.meteorite.createdBy.username}</a></h4> }
          <h4>{this.state.meteorite.type}</h4>
          <h4>H {this.state.meteorite.height}cm x L {this.state.meteorite.length}cm x W {this.state.meteorite.width}cm</h4>
          <h4>Weight: {this.state.meteorite.weight}g</h4>
          <h4>{this.state.meteorite.forSale}</h4>

          <BackButton history={this.props.history} />

          <div className="columns">
            <div className="column is-full">
              {this.state.meteorite.comments && this.state.meteorite.comments.map(comment => {
                return(
                  <div key={comment._id}>
                    <p>{comment.content} </p>
                    { Auth.isAuthenticated() && Auth.getPayload().userId === comment.createdBy && <button className="button is-small" onClick={() => this.deleteComment(comment._id)}>
                    Delete</button>}
                    <p><strong>{comment.createdBy.username}</strong></p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="column is-one-third is-offset-half">
          <CommentsForm
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
            newComment={ this.state.newComment }
          />
        </div>


      </div>
    );
  }

}

export default MeteoritesShow;
