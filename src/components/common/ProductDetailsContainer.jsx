import React from 'react';

const ProductDetailsContainer = ({good}) => {
    return (
        <div className='details-grid'>
                <div className="details-image">
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
                   <span className='col'>0{good.contact}</span>
                   </div>
                </div>
            </div>
    );
};

export default ProductDetailsContainer;