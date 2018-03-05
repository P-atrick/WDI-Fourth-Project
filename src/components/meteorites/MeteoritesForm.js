import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import BackButton from '../utility/BackButton';


function MeteoritesForm({ history, handleSubmit, handleChange, handleDateChange, meteorite, errors }) {

  const formIsInvalid = Object.keys(errors).some(key => errors[key]);


  return (
    <div className="columns is-mobile">
      <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter">

        <div className="field">
          <label className="label" htmlFor="name" >Meteorite Name</label>
          <div className="control">
            <input
              className="input"
              placeholder="Meteorite Name"
              type="text"
              id="name"
              name="name"
              value={meteorite.name}
              onChange={handleChange}
            />
            { errors.name && <p className="form-error">{ errors.name }</p> }
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="weight" >Weight (grams)</label>
          <div className="control">
            <input
              className="input"
              placeholder="Weight (grams)"
              type="text"
              id="weight"
              name="weight"
              value={meteorite.weight}
              onChange={handleChange}
            />
            { errors.weight && <p className="form-error">{ errors.weight }</p> }
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field">
            <label className="label" htmlFor="height" >Height (cm)</label>
            <div className="control">
              <input
                className="input"
                placeholder="Height (cm)"
                type="text"
                id="height"
                name="height"
                value={meteorite.height}
                onChange={handleChange}
              />
              { errors.height && <p className="form-error">{ errors.height }</p> }
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="length" >Length (cm)</label>
            <div className="control">
              <input
                className="input"
                placeholder="Length (cm)"
                type="text"
                id="length"
                name="length"
                value={meteorite.length}
                onChange={handleChange}
              />
              { errors.length && <p className="form-error">{ errors.length }</p> }
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="width" >Width (cm)</label>
            <div className="control">
              <input
                className="input"
                placeholder="Width (cm)"
                type="text"
                id="width"
                name="width"
                value={meteorite.width}
                onChange={handleChange}
              />
              { errors.width && <p className="form-error">{ errors.width }</p> }
            </div>
          </div>

        </div>

        <div className="field">
          <label className="label" htmlFor="location" >Location</label>
          <div className="control">
            <input
              className="input"
              placeholder="Location"
              type="text"
              id="location"
              name="location"
              value={meteorite.location}
              onChange={handleChange}
            />
            { errors.location && <p className="form-error">{ errors.location }</p> }
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="type" >Type</label>
          <div className="control select">
            <select
              id="type"
              name="type"
              defaultValue="Please Select"
              onChange={handleChange}
            >
              <option disabled value="Please Select">Please select a meteorite type</option>
              <option value="iron">Iron</option>
              <option value="stone">Stone</option>
              <option value="stony-iron">Stony-Iron</option>
            </select>
            { errors.type && <p className="form-error">{ errors.type }</p> }
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="found" >Date Found</label>
          <div className="control">
            <input
              className="input"
              placeholder="Date Found"
              type="text"
              id="found"
              name="found"
              value={moment(meteorite.found).format('MMMM Do YYYY')}
              onChange={handleChange}
            />
            { errors.found && <p className="form-error">{ errors.found }</p> }
          </div>
        </div>

        <DatePicker
          selected={meteorite.date}
          onChange={handleDateChange}
        />

        <div className="field">
          <label className="label" htmlFor="forSale" >List meteorite for sale now?</label>
          <div className="control select">
            <select
              id="forSale"
              name="forSale"
              defaultValue="Please Select"
              onChange={handleChange}
            >
              <option disabled value="Please Select">Please select</option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="price" >Price (£)</label>
          <div className="control">
            <input
              className="input"
              placeholder="Price (£)"
              type="text"
              id="price"
              name="price"
              value={meteorite.price}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="image" >Image</label>
          <div className="control">
            <input
              className="input"
              placeholder="Image"
              type="text"
              id="image"
              name="image"
              value={meteorite.image}
              onChange={handleChange}
            />
            { errors.image && <p className="form-error">{ errors.image }</p> }
          </div>
        </div>

        <button disabled={ formIsInvalid } className="button is-success column is-one-third is-offset-one-third">Save</button>
      </form>
    </div>
  );
}

export default MeteoritesForm;
