import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AnimatePresence} from "framer-motion";

import { Header } from './components/block/Header';
import { Footer } from './components/block/Footer';

import Home from "./components/pages/Home";
import Location from "./components/pages/Location";
import About from "./components/pages/About";

import Test from "./components/pages/Test";
import Scroll from "./components/pages/Scroll";

import './App.scss';
import './scss/style.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AnimatePresence exitBeforeEnter initial={true}>
        <main id="page-wrapper">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/location/"} element={<Location />} />
          <Route path={"/about/"} element={<About />} />
          <Route path={"/test/"} element={<Test />} />
          <Route path={"/scroll/"} element={<Scroll />} />
        </Routes>
        </main>
      </AnimatePresence>
      <Footer />
    </BrowserRouter>
  );
};

export default App;