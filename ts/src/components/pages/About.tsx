import React from 'react';
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

const Login = () => {
  return (
    <>
    <motion.div
      animate={{ opacity:1 }}
      initial={{ opacity:0 }}
      exit={{ opacity:0 }}
      transition={{ duration: 0.4}}
    >
      <h1>ABOUT</h1>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </motion.div>
    </>
  );
};

export default Login;