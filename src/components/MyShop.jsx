import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {deleteProduct, getProducts} from '../services/marketService';
import { toast } from 'react-toastify';
import { getCurrentUser } from '../services/authService';
import ShopShelves from './ShopShelves';
import Spinner from './common/Spinner';
import Instructions from './Instructions';
import ShopHeader from './ShopHeader';
import ShopFooter from './ShopFooter';

const MyShop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = getCurrentUser();

    useEffect(() => {
      (async() => {
          try{
            const response = await getProducts();
            const results = response.data;
            const filtered = results.filter(pdt => pdt.contact === user.phoneNumber);
            setGoods(filtered);
            setLoading(false);

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
          <ShopHeader />
          {loading && <Spinner />}
          {!loading && goods.length <= 0 && <Instructions />}
          {!loading && goods.length > 0 && <ShopShelves goods={goods} handleDelete={handleDelete} /> }
          {!loading && <ShopFooter user={user} handleLogout={handleLogout} /> }

        </div>);
};

export default MyShop;