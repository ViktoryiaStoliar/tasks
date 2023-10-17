import React from 'react';
import { Route, Routes } from 'react-router-dom';
import state from './Pages_new/useState/state'


const RoutesProvider = () => {
    return <Routes >
        <Route path='/' element={<state />}>
    </Routes >
}

export default RoutesProvider;
