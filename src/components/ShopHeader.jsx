import React from 'react';

const ShopHeader = () => {
    return (
        <div className='shopHeader'>
                <h2>BIG YES</h2>
                <Link to='/addStock' className='btn btn-primary add'> + Add Stock</Link>
        </div>
    );
};

export default ShopHeader;