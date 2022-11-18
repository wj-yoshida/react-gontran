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
import News from "./components/pages/News";
import SinglePost from "./components/pages/SinglePost";
import Chat from "./components/pages/Chat";
import ChatLogin from "./components/pages/ChatLogin";
import socketIO from 'socket.io-client';
import HooksTuto from "./components/pages/HooksTutorial";



import './App.scss';
import './scss/style.scss';
const socket = socketIO.connect('http://localhost:4001');

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AnimatePresence exitBeforeEnter initial={true}>
        <main id="page-wrapper">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path={"/location/"} element={<Location />} />
          <Route path={"/about/"} element={<About />} />
          <Route path={"/test/"} element={<Test />} />
          <Route path={"/scroll/"} element={<Scroll />} />
          <Route path={"/hooks-tutorial/"} element={<HooksTuto />} />
          <Route path={"/news/"} element={<News />} />
          <Route path={"/news/:id"} element={<SinglePost />} />
          <Route path={"/chat"} element={<Chat socket={socket} />} />
          <Route path={"/chatlogin"} element={<ChatLogin socket={socket} />} />
        </Routes>
        </main>
      </AnimatePresence>
      <Footer />
    </BrowserRouter>
  );
};

export default App;