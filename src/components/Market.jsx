import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify';
import { getProducts } from '../services/marketService';
import GoodsContainer from './common/GoodsContainer';

const Market = () => {
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        (async() => {
           try{
            const response = await getProducts();
            setGoods(response.data)

           } catch (ex) {toast.error(ex.response.data)}           
        })();
    }, []);

    return (
        <GoodsContainer goods={goods} />
    );
};

export default Market;