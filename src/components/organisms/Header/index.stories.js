import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from ".";

export default {
    title: 'Component/organisms/Header',
    component: Header,
}

export const Primary = () => 
<BrowserRouter>
    <Routes>
        <Route>
            <Header/>
        </Route>
    </Routes>
</BrowserRouter>