import React from 'react';
//import css
import "./FilterDropdown.css"

const FilterDropdown = ({ onChange }) => {
  const handleFilterChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select className='drop-down' onChange={handleFilterChange}>
      <option value="">All Types</option>
      <option value="burner">Burner</option>
      <option value="subscription">Subscription</option>
    </select>
  );
};

export default FilterDropdown;
