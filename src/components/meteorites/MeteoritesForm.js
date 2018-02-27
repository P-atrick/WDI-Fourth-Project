import React from 'react';

import BackButton from '../utility/BackButton';

function MeteoritesForm({ history, handleSubmit, handleChange, meteorite }) {
  return (
    <div>
      <div>
        <BackButton history={history} />
      </div>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Meteorite Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={meteorite.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={meteorite.weight}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            id="height"
            name="height"
            value={meteorite.height}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="length">Length</label>
          <input
            type="text"
            id="length"
            name="length"
            value={meteorite.length}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="width">Width</label>
          <input
            type="text"
            id="width"
            name="width"
            value={meteorite.width}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="location">Location Found</label>
          <input
            type="text"
            id="location"
            name="location"
            value={meteorite.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="type">Meteorite Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={meteorite.type}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="found">Date Found</label>
          <input
            type="text"
            id="found"
            name="found"
            value={meteorite.found}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            value={meteorite.image}
            onChange={handleChange}
          />
        </div>

        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default MeteoritesForm;
