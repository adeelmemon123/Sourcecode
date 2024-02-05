import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../Pages/Login/Login"
import Sidebar from "../Sidebar/Sidebar"

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/dashboard" element={<Sidebar/>} />
        
            </Routes>
        </BrowserRouter>
    );
};

export default Navigation;