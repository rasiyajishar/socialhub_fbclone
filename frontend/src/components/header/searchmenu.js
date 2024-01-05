// import React,{useRef} from 'react'

// function Searchmenu() {
//     const menu=useRef(null)
//   return (
//     <div className='searcharea' ref ={menu}>
//     <div className='searchwrap'>
//         <div className='search'>
//         <input type='text' placeholder='search socialhub...' />    
            
//             </div>
//             <div className='searchhistoryheader'>
//                 <span>recent searches</span>
//                 <a>Edit</a>
//             </div>
//             </div >
//             <div className='search history'></div>
//             <div className='search resultsscrollbar'></div>
//             </div>
//   )
// }

// export default Searchmenu


// Searchmenu Component
// Searchmenu Component
import React, { useRef, useState } from 'react';

function Searchmenu() {
  const menu = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  const handleSearch = () => {
    // Implement your search logic here using the searchValue
    // For demonstration purposes, let's just set some dummy results
    setSearchResults([`Result 1 for ${searchValue}`, `Result 2 for ${searchValue}`]);
  };

  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleBlur = () => {
    // Optionally, you can reset the search results and close the search area
    setSearchResults([]);
    // Close the search area or handle any other logic on blur
  };

  return (
    <div className='searcharea' ref={menu}>
      <div className='searchwrap'>
        <div className='search' onClick={handleClick}>
          <input
            ref={inputRef}
            type='text'
            placeholder='search socialhub...'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onBlur={handleBlur}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className='searchhistoryheader'>
          <span>recent searches</span>
          <a>Edit</a>
        </div>
      </div>
      <div className='search history'>
        {/* Display search results */}
        {searchResults.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
      <div className='search resultsscrollbar'></div>
    </div>
  );
}

export default Searchmenu;
