import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home.jsx';

const RoutesContainer = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesContainer;