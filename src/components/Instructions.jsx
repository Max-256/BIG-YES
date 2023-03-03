import React from 'react';

const Instructions = () => {
    return (
        <div className='tips'>
        <p>Your shop is empty. Follow guides below before adding any Stock.</p>
        <p className='important'>IMPORTANT!:</p> 
            <li>Picture size or ratio in the camera must be <strong>1:1</strong> (see camera settings)</li>
            <li>Use a white or an attractive background for pictures</li>
            <li>Take the real picture of the product on sale using your phone camera.</li>

      </div>
    );
};

export default Instructions;