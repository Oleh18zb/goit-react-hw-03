import React from 'react';
import s from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={s.SearchBox}>
      <label className={s.label}>
        <span className={s.span}>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          name="filter"
          value={filter}
          onChange={onFilterChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
