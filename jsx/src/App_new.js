import React from "react";
import { Route, Routes } from "react-router-dom";
import UseState from "./Pages_new/useState/useState";
import UseCallback from "./Pages_new/useCallback/useCallback";


function App_new() {
    return {
        <Routes>
        <Route path="/usestate" element={<UseState />} />
        <Route path="/usecallback" element={<UseCallback />} />
    </ >
}
}