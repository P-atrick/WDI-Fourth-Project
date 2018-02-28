import React from 'react';

import BackButton from '../utility/BackButton';

function MeteoritesForm({ history, handleSubmit, handleChange, meteorite }) {
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
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="type" >Type</label>
          <div className="control">
            <input
              className="input"
              placeholder="Type"
              type="text"
              id="type"
              name="type"
              value={meteorite.type}
              onChange={handleChange}
            />
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
              value={meteorite.found}
              onChange={handleChange}
            />
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
          </div>
        </div>

        <button className="button is-success column is-one-third is-offset-one-third">Save</button>
      </form>
    </div>
  );
}

export default MeteoritesForm;
