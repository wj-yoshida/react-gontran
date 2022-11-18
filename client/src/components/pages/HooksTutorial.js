import React, {useState, useEffect, useRef, useReducer, useMemo} from 'react';
import Head from "../block/Head"
import { Link } from "react-router-dom";
import '../../scss/hooks.scss';

const reducer = (refState, action) => {
  switch(action.type){
    case "increment":
      return refState + 1;
    case "decrement":
      return refState - 1;
    default:
      return refState;
  }
}

const HooksTuto = () => {
  const [lcnt, setLcnt] = useState(0);
  const [refCnt, setRefCnt] = useState(false);
  const [refState, dispatch] = useReducer(reducer, 0);
  
  const ref = useRef();
  const handleClick = () => {
    setLcnt(lcnt+1);
  };

  const handleRef = () => {
    setRefCnt(ref.current.value);
  };
  
  useEffect(()=>{
    console.log("local effect");
  }, [])

  //useMemo
  const [memoCnt1, setMemoCnt1] = useState(0);
  const [memoCnt2, setMemoCnt2] = useState(0);

  // const square = () => {
  //   let i = 0;
  //   while(i < 2){
  //     i++;
  //   }
  //   return memoCnt2 * memoCnt2; 
  // }

  const square = useMemo(() => {
    let i = 0;
    while(i < 20000000){
      i++;
    }
    return memoCnt2 * memoCnt2; 
  }, [memoCnt2])

  return (
    <>
    <Head title="Hooks チュートリアル" />
      <div className='hooksTutorial'>
        <h1>Hooks</h1>

        <div className='hooksTutorial__section'>
          <h2>useState</h2>
          <p className='text__desc'>
            <span>stateによるカウントアップ</span>
            <span className='ml__20 text__point'>{lcnt}</span>
          </p>
          <button className='btn' onClick={handleClick}>
            <span>+</span>
          </button>
        </div>

        <div className='hooksTutorial__section'>
          <h2>useRef</h2>
          <div className='col2 center'>
            <input type="text" name="name" ref={ref}  />
            <button className='textBtnAdd' onClick={handleRef}>
              <span>取得</span>
            </button>
          </div>
          <p className='text__desc'>
            <span>useRefでinputの値を取得</span>
            <span className='ml__20 text__point'>{refCnt}</span>
          </p>
        </div>

        <div className='hooksTutorial__section'>
          <h2>useReducer</h2>
          <p className='text__desc'>
            <span>useReducerによるカウントアップ、ダウン</span>
          </p>
          <p className='text__point text__center'>
              カウント: {refState}
            </p>
          <div className='col2 center'>
            <button className='btn' onClick={() => dispatch({type: "increment"})}>
              <span>+</span>
            </button>
            
            <button className='btn' onClick={() => dispatch({type: "decrement"})}>
              <span>-</span>
            </button>
          </div>
        </div>

        <div className='hooksTutorial__section'>
          <h2>useMemo</h2>
          <p className='text__desc'>
            <span>カウント1</span>
            <span className='ml__20 text__point'>{memoCnt1}</span>
          </p>
          <p className='text__desc'>
            <span>カウント2</span>
            <span className='ml__20 text__point'>{memoCnt2}</span>
          </p>
          <p className='text__desc'>
            <span>結果</span>
            <span className='ml__20 text__point'>{square}</span>
          </p>
          <button className='textBtn center mb__10' onClick={()=>setMemoCnt1(memoCnt1 + 1)}>
            <span>カウント1 +</span>
          </button>
          <button className='textBtn center' onClick={()=>setMemoCnt2(memoCnt2 + 1)}>
            <span>カウント2 +</span>
          </button>
        </div>
        
        <div>
          <Link to={`/`}>ホームに戻る</Link>
        </div>
      </div>
    </>
  );
};

export default HooksTuto;