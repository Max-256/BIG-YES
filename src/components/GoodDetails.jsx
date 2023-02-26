
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { getProduct, getProducts } from '../services/marketService';
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
                setRelated(response.data);
                window.scrollTo(0, 0)

            } catch(ex){toast.error(ex.response.data)}           
        })();
    },[productId]);

    return (
        <div className='good-details'>

            <div className='details-grid'>
                <div>
                    <img src={good.image} alt="" />
                </div>
                <div>
                   <div className='row'>
                   <span className='col'><h3>Item:</h3>{good.good}</span>
                   <span className='col'><h3>Price:</h3>UGX. {good.price}</span>
                   </div>

                   <h3>Condition:</h3>
                   {good.condition}

                   <h3>Description:</h3>
                   {good.description}

                   <h3>Contact Seller</h3>
                   <div className='row'>
                   <span className='col'>{good.seller}</span>
                   <span className='col'>{good.contact}</span>
                   </div>
                </div>
            </div>

            <div className='mt-5 related'>
                <h2>You may also like ...</h2>
                <div className='market grid grid-1x2 grid-1x3 grid-1x4'>
                {related.map(good =>
                <Link key={good._id} to={`/good-details/${good._id}`} className='card m-2'>
                   <img src={good.image} alt=""/>
                   <div className='card-body'>
                    <span className='good-title'>{good.good}</span>
                    <span className='badge bg-primary'>UGX.{good.price}</span> 
                   </div>                
                </Link> )}
                </div>
            </div>

        </div>);
};

export default GoodDetails;