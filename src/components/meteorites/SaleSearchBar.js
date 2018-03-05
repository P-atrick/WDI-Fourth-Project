import React from 'react';

const SaleSearchBar = ({ handleSort }) => {

  return(
    <div className="control">
      <select onChange={handleSort} defaultValue="Sort by..." className="select">
        <option disabled value="Sort by...">Sort by...</option>
        <option value="price|asc">Price (Low - High)</option>
        <option value="price|desc">Price (High - Low)</option>
        <option value="name|asc">Name (A - Z)</option>
        <option value="name|desc">Name (Z - A)</option>
        <option value="weight|asc">Weight (Low - High)</option>
        <option value="weight|desc">Weight (High - Low)</option>
        <option value="height|asc">Height (Low - High)</option>
        <option value="height|desc">Height (High - Low)</option>
        <option value="length|asc">Length (Low - High)</option>
        <option value="length|desc">Length (High - Low)</option>
        <option value="width|asc">Width (Low - High)</option>
        <option value="width|desc">Width (High - Low)</option>
      </select>
    </div>
  );
};

export default SaleSearchBar;
