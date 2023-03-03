
import React from 'react';
import spin from "../../images/spinner.gif";

const Spinner = () => {
    return (
        <div className='spinner'>
            <img className='spin-gif' src={spin} alt="Loading..." />
        </div>
    );
};

export default Spinner;
