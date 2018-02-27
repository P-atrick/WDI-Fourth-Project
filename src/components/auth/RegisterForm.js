import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <div className="columns is-mobile">
      <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter">

        <div className="field">
          <label className="label" htmlFor="username" >Username</label>
          <div className="control has-icons-left">
            <input
              id="username"
              className="input"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={user.username}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="email" >Email Address</label>
          <div className="control has-icons-left">
            <input
              id="email"
              className="input"
              type="text"
              name="email"
              placeholder="Email Address"
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

        <div className="field">
          <label className="label" htmlFor="passwordConfirmation" >Password</label>
          <div className="control has-icons-left">
            <input
              id="passwordConfirmation"
              className="input"
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={user.passwordConfirmation}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-key"></i>
            </span>
          </div>
        </div>

        <div className="control">
          <button className="button is-success column is-half is-offset-one-quarter">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
