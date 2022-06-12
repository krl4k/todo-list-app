import React from 'react';

const Layout = ({children}) => (
    <div>
        <div className='bg-gray-900 h-screen py-10'>
            {children}
        </div>
    </div>
);

export default Layout;