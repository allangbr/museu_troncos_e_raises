import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import Gallery from "./pages/gallery/gallery.js";
import Movie from "./pages/movies/movies.js";
import Audio from "./pages/audios/audios.js";
import Document from "./pages/document/document.js";

export default function Routes () {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/audio" element={<Audio />} />
                <Route path="/document" element={<Document />} />
            </Switch>
        </BrowserRouter>
    )
}