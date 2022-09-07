import React from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
