
import React, { useEffect, useState } from 'react';
import { getGoods } from '../services/market';
import {MdOutlineEditNote} from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyShop = () => {

    const [goods, setGoods] = useState([]);

    useEffect(() => setGoods(getGoods()),[]);

    const handleDelete = (id) => {
      console.log(`delete ${id}`);
    }

    
    return (
        <div className='myShop'>

           <div className='shopHeader'>
                <h1>BIG YES</h1>
                <Link to='/addStock' 
                      className='btn btn-primary'> + Add Stock</Link>
           </div>

           <div className='shelves'>
            {goods.map( good => 
              <div className='row shopItem'>

              <div className='col'><img src={good.image} alt="" /></div>

              <div className='col'>
                    <li>{good.good}</li>
                    <li>UGX. {good.price}</li>
                    <li className='item-buttons'>
                        <Link to={`/editGood/${good._id}`} 
                              className='btn btn-primary edit'>edit <MdOutlineEditNote/></Link>
                        <span className='btn btn-danger delete' 
                              onClick={() => handleDelete(good._id)}>Remove</span></li>
              </div>                
              </div>)}            
           </div> 

        </div>);
};

export default MyShop;