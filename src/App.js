import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from './components/block/Header';
import { Footer } from './components/block/Footer';

import Home from "./components/pages/Home";
import Location from "./components/pages/Location";
import About from "./components/pages/About";

import './App.scss';
import './scss/style.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main id="page-wrapper">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/location/"} element={<Location />} />
        <Route path={"/about/"} element={<About />} />
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;