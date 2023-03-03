import React from 'react';
import {MdOutlineEditNote} from 'react-icons/md';
import { formatPrice } from '../services/marketService';
import { Link } from 'react-router-dom';

const ShopShelves = ({goods, handleDelete}) => {
    
    return (
        <div className='shelves'>
            {goods.map( good => 
              <div key={good._id} className='row shopItem'>

              <div className='col'><img src={good.image} alt="" /></div>

              <div className='col'>
                    <li>{good.good}</li>
                    <li>{formatPrice(good)}</li>
                    <li className='item-buttons'>
                        <Link to={`/editGood/${good._id}`} 
                              className='btn btn-primary edit'>edit <MdOutlineEditNote/></Link>
                        <span className='btn btn-danger delete' 
                              onClick={() => handleDelete(good._id)}>Remove</span></li>
              </div>                
              </div>)}            
           </div>
    );
};

export default ShopShelves;