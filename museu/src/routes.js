import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.js";

export default function Routes () {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
            </Switch>
        </BrowserRouter>
    )
}