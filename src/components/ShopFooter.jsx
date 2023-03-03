import React from 'react';
import {MdLogout} from 'react-icons/md';

const ShopFooter = ({user, handleLogout}) => {
    return (
        <div className='footer'>
            <div className='user'>{user.username} <br/> {user.email}</div>               
            <div className='contact-us'>
               <div className='mail'><a href = "mailto: bigyesonline1@gmail.com" target="blank">CONTACT BIG YES</a></div>
               <div className='logout' onClick={handleLogout}>Logout <MdLogout /></div>
            </div>
          
          </div>
    );
};

export default ShopFooter;