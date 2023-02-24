import React from 'react';

const EditGood = (props) => {
    const goodId = props.match.params.id;

    return (
        <div className='editGood'>
            <h2>Edit Good</h2>
            <h3>{goodId}</h3>
        </div>
    );
};

export default EditGood;