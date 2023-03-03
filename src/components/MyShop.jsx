import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {deleteProduct, getProducts} from '../services/marketService';
import { toast } from 'react-toastify';
import {MdLogout} from 'react-icons/md';
import { getCurrentUser } from '../services/authService';
import ShopShelves from './ShopShelves';
import Spinner from './common/Spinner';

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

           <div className='shopHeader'>
                <h2>BIG YES</h2>
                <Link to='/addStock' className='btn btn-primary add'> + Add Stock</Link>
           </div>
          {loading && <Spinner />}
          {!loading &&  goods.length <= 0 && <p>Your shop is empty. please add stock to get started <br />
          Tip: Images give the best impression. focus the product in the center and upload the best image.</p> }
          {!loading && goods.length > 0 && <ShopShelves goods={goods} handleDelete={handleDelete} /> }

          {!loading && <div className='footer'>
            <div className='user'>{user.username} <br/> {user.email}</div>
               
            <div className='contact-us'>
               <div className='mail'><a href = "mailto: bigyesonline1@gmail.com" target="blank">CONTACT BIG YES</a></div>
               <div className='logout' onClick={handleLogout}>Logout <MdLogout /></div>
            </div>
          
          </div>}

        </div>);
};

export default MyShop;