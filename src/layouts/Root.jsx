import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const Root = () => {
    return (
        <div className="bg-slate-900 text-white">
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;