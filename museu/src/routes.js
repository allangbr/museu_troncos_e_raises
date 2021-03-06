import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import Gallery from "./pages/gallery/gallery.js";

export default function Routes () {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
            </Switch>
        </BrowserRouter>
    )
}