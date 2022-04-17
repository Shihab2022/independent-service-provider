import React from 'react';
import notFound from '../../../Images/notFound.jpg'
const NotFound = () => {
    return (
        <div>
            <img className="h-screen " style={{width:'100%'}} src={notFound} alt="" />
        </div>
    );
};

export default NotFound;