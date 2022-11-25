import React from 'react';
import { Link } from "react-router-dom";
import { AnimatePresence, motion} from "framer-motion";
import { Loading } from '../block/Loading';

const Login = () => {
  return (
    <>
      <Loading />
      <h1>ABOUT</h1>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Login;