
import React, { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState("");

    const handleChange = e => setQuery(e.target.value);

    const handleSearch = searchQuery => {
        console.log(searchQuery);
        setQuery("");
    }

    return (
        <div className='search'>
            <h1>Wan Duc Stores</h1>
            <div className='input-group'>

              <input  value={query}
                      placeholder="enter item"
                      onChange={handleChange} />

              <button className='search-button'
                      onClick={() => handleSearch(query)}>Search
              </button>
            </div>
        </div>
    );
};

export default Search;