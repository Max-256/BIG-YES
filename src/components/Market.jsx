
import React, { useEffect, useState } from 'react';
import { getGoods } from '../services/market';

const Market = () => {
    const [goods, setGoods] = useState([]);
    useEffect(() => setGoods(getGoods()),[]);


    return (
        <div className='market grid grid-1x2 grid-1x3 grid-1x4'>
            {goods.map(good =>
              <div className='card m-2'>
                 <img src={good.image} alt="" />


                 <div className='card-body'>
                 <span className='good-title'>{good.name}</span>
                 <span className='badge bg-primary'>UGX.{good.price}</span> 
                 </div>                
              </div>
            )}
        </div>
    );
};

export default Market;