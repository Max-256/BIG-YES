import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {deleteProduct, getProducts} from '../services/marketService';
import { toast } from 'react-toastify';
import {MdLogout} from 'react-icons/md';
import { getCurrentUser } from '../services/authService';
import ShopShelves from './ShopShelves';

const MyShop = () => {
    const [goods, setGoods] = useState([]);
    const user = getCurrentUser();

    useEffect(() => {
      (async() => {
          try{
            const response = await getProducts();
            const results = response.data;
            const filtered = results.filter(pdt => pdt.contact === user.phoneNumber);
            setGoods(filtered);

          }catch(ex){toast.error(ex.response.data)}            
      })();
    }, [user.phoneNumber]);

    const handleDelete = async (id) => {
      try{
        await deleteProduct(id);
        window.location.reload();

      } catch(ex){toast.error(ex.response.data)}    
    }

    const handleLogout = () => {
      localStorage.removeItem("token");
      window.location = '/login'
    }

    return (
        <div className='myShop'>

           <div className='shopHeader'>
                <h2>BIG YES</h2>
                <Link to='/addStock' className='btn btn-primary add'> + Add Stock</Link>
           </div>

          {goods.length <= 0 && <p>Your shop is empty. please add stock to get started</p> }
          {goods.length > 0 && <ShopShelves goods={goods} handleDelete={handleDelete} /> }

          <div className='logout' >
          <div>{user.username}</div>
          <div className='out-icon' onClick={handleLogout}>Logout <MdLogout /></div>
          </div>

        </div>);
};

export default MyShop;