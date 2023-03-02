
import React, { useEffect, useState } from 'react';
import { getProduct, getProducts } from '../services/marketService';
import GoodsContainer from './common/GoodsContainer';
import ProductDetailsContainer from './common/ProductDetailsContainer';
import {toast} from 'react-toastify';

const GoodDetails = (props) => {
    const productId = props.match.params.id;

    const [good, setGood] = useState({});

    useEffect(() => {
        (async () => {
            try{
                const response = await getProduct(productId);
                setGood(response.data);

            } catch(ex) {toast.error(ex.response.data)}    
        })();
    }, [productId]);

    const [related, setRelated] = useState([]);

    useEffect(() => {
        (async () => {
            try{
                const response = await getProducts();
                const results = response.data;
                
                const res = results.filter(pdt => 
                      pdt.good.includes(good.good) || 
                      pdt.seller.includes(good.seller));

                setRelated(res);
                window.scrollTo(0, 0)

            } catch(ex){toast.error(ex.response.data)}           
        })();
    },[productId, good.good, good.seller]);

    return (
        <div className='good-details'>
            <ProductDetailsContainer good={good} />
            <div className='related'>
            <h2>you may also like. . .</h2>
            <GoodsContainer goods={related} />
            </div>
            
        </div>);
};

export default GoodDetails;