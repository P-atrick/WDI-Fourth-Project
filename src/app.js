import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import MeteoritesRoutes from './components/meteorites/MeteoritesRoutes';
import Navbar from './components/utility/Navbar';
import Login       from './components/auth/Login';
import Register    from './components/auth/Register';

import 'bulma/css/bulma.css';
import './scss/style.scss';

class App extends Component {

  render() {
    return(
      <Router>
        <div>
          <header>
            <Navbar />
          </header>
          <main className="content">
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <MeteoritesRoutes />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
