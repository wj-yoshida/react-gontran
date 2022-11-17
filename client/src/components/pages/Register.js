import React from 'react';
import Head from "../block/Head"
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

const Register = () => {
  return (
    <>
    <Head title="新規登録ページ" />
      <motion.div
        animate={{ opacity:1 }}
        initial={{ opacity:0 }}
        exit={{ opacity:0 }}
        transition={{ duration: 0.4}}
      >
      <h1>新規登録ページ</h1>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
      </motion.div>
    </>
  );
};

export default Register;