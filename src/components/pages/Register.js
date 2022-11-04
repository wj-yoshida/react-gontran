import React from 'react';
import Head from "../block/Head"
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
    <Head title="新規登録ページ" />
      <h1>新規登録ページ</h1>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Register;