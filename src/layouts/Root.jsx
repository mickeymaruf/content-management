import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';

const Root = () => {
    return (
        <div className="bg-slate-900 text-white">
            {/* <Header /> */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;