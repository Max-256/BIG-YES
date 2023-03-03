import React, { useState } from 'react';
import {toast} from 'react-toastify';
import {getProducts} from '../services/marketService';
import GoodsContainer from './common/GoodsContainer';
import Spinner from './common/Spinner';

const Search = () => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = e => setQuery(e.target.value);

    const handleSearch = async () => {
        const trimmed = query.trim();
        if(!trimmed) return toast.warn('search box is empty');

        setLoading(true);

        const {data} = await getProducts();
        const filtered = data.filter(pdt => 
            pdt.good.toLowerCase().includes(query.toLowerCase()) ||
            pdt.seller.toLowerCase().includes(query.toLowerCase()) ||
            pdt.location.toLowerCase().includes(query.toLowerCase()));

        if(filtered.length === 0) {
            setLoading(false);
            setQuery("");
            return toast.info(`${query} did not match search results`)
        };    

        setSearchResults(filtered);
        setLoading(false);
        setQuery("");
    }

    return (
        <div className='search'>
            <h1>BIG YES</h1>

            <div className='input-group'>
              <input  value={query}
                      placeholder="enter item . . ."
                      onChange={handleChange} />

              <button className='search-button'
                      onClick={() => handleSearch(query)}>Search
              </button>
            </div>

            <div className='search-by'>search by product name, shopname or location</div>

            {loading && <Spinner />}
            {!loading && <GoodsContainer goods={searchResults} />}
        </div>
    );
};

export default Search;