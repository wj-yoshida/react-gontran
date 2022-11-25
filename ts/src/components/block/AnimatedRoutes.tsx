import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion} from "framer-motion";
import Home from "../pages/Home";
import Location from "../pages/Location";
import About from "../pages/About";

import News from "../pages/News";
import SinglePost from "../pages/SinglePost";

export default function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path={"/"} element={<Home />} />
                <Route path={"/location/"} element={<Location />} />
                <Route path={"/about/"} element={<About />} />
                <Route path={"/news/"} element={<News />} />
                <Route path={"/news/:id"} element={<SinglePost />} />
            </Routes>
        </AnimatePresence>
    )
}