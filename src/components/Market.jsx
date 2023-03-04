import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify';
import { getProducts } from '../services/marketService';
import GoodsContainer from './common/GoodsContainer';
import Spinner from './common/Spinner';

const Market = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async() => {
           try{
            const response = await getProducts();
            setGoods(response.data)
            setLoading(false);

           } catch (ex) {toast.error(ex.response.data)}           
        })();
    }, []);

    return (
        <div>
            {loading && <Spinner />}
            {!loading && <GoodsContainer goods={goods} />}
        </div>
        
    );
};

export default Market;