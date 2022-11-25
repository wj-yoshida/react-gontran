import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"

import { Header } from './components/block/Header';
import { Footer } from './components/block/Footer';
import AnimatedRoutes from './components/block/AnimatedRoutes';

//import socketIO from 'socket.io-client';
import './App.scss';
import './scss/style.scss';

const App = () => {
  return (
    <Router>
      <Header />
        <main id="page-wrapper">
            <AnimatedRoutes />
        </main>
      <Footer />
    </Router>
  );
};

export default App;