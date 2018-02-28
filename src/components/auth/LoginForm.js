import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <div className="columns is-mobile">
      <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter">
        <div className="field">
          <label className="label" htmlFor="email" >Email Address</label>
          <div className="control has-icons-left">
            <input
              id="email"
              className="input"
              type="text"
              name="email"
              placeholder="Email address"
              onChange={handleChange}
              value={user.email}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="password" >Password</label>
          <div className="control has-icons-left">
            <input
              id="password"
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={user.password}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-key"></i>
            </span>
          </div>
        </div>

        <button className="button is-success column is-one-third is-offset-one-third">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
