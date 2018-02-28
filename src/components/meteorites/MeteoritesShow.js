import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import CommentsForm from '../comments/CommentsForm';
import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';

class MeteoritesShow extends Component {

  state= {
    meteorite: {},
    newComment: {
      content: '',
      createdBy: ''
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
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { value }}) => {
    this.setState({ newComment: { content: value }}, () => console.log(this.state.newComment));
  }

  handleSubmit = e => {
    e.preventDefault();
    Axios
      .post(`/api/meteorites/${this.state.meteorite.id}/comments`, this.state.newComment,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
      .then((res) => {
        this.setState(prevState => {
          const newState = prevState;
          newState.meteorite.comments.push(res.data);
          newState.newComment.content = '';
          newState.newComment.createdBy = '';
          return newState;
        });
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));
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
          { this.state.meteorite.createdBy && <h4>Found by <a href={`/users/${this.state.meteorite.createdBy.id}`}>{this.state.meteorite.createdBy.username}</a></h4> }
          <h4>{this.state.meteorite.type}</h4>
          <h4>H {this.state.meteorite.height}cm x L {this.state.meteorite.length}cm x W {this.state.meteorite.width}cm</h4>
          <h4>{this.state.meteorite.weight}g</h4>

          <BackButton history={this.props.history} />
        </div>
        <div className="column is-half">
          { Auth.isAuthenticated() && isCurrentUsers && <Link className="button" to={`/meteorites/${this.state.meteorite.id}/edit`}>
          Edit</Link> }
          {' '}
          { Auth.isAuthenticated() && isCurrentUsers && <button className="button" onClick={this.deleteMeteorite}>
          Delete</button>}
        </div>

        {this.state.meteorite.comments && this.state.meteorite.comments.map(comment => {
          return(
            <div key={comment._id} >
              <p>{comment.content} </p>
              {/* <p>{comment.createdBy.username} </p> */}
            </div>
          );
        })}

        <CommentsForm
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit }
          newComment={ this.state.newComment }
        />
      </div>
    );
  }

}

export default MeteoritesShow;
