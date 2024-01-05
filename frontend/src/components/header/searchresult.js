
import React from 'react';
import './style.css';
const SearchResult = ({ results }) => (
  <div className='search-results-container'>
    {results.map((result, index) => (
      <div key={index} className='search-result-item'>
        {result}
      </div>
    ))}
  </div>
);

export default SearchResult;