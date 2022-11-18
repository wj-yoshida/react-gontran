import React from 'react';
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

import '../../scroll.scss';

/*
const { useEffect, useState, useRef } = React;

const thresholdArray = () => {
    const threshold = []
    for (let i=0; i<=1; i += 0.01) threshold.push(i)
        return threshold
}
  
const EachDiv = ({ id, update, children }) => {
    const ref = useRef(null)

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            //entry.target.style.backgroundColor = `rgba(22, 22, 22, ${entry.intersectionRatio})`
                entry.target.style.opacity = `${entry.intersectionRatio}`
                update(prev => ({
                    ...prev,
                    [entry.target.id]: String(entry.isIntersecting)
                }))
            })
        },
        {
            threshold: thresholdArray()
        })
    
        observer.observe(ref.current)
    
        return () => observer.unobserve(ref.current)
    }, [])

    return <div className={'box'} id={id} ref={ref}>{children}</div>
}
  

const Scroll = () => {
    const [divVisibility, setDivVisibility] = useState({
        div1: 'false',
        div2: 'false',
        div3: 'false',
        div4: 'false',
        div5: 'false',
        div6: 'false',
    })


    return (
        <>
            <motion.div
                animate={{ opacity:1 }}
                initial={{ opacity:0 }}
                exit={{ opacity:0 }}
                transition={{ duration: 0.4}}
            >
                {[1,2,3,4,5,6].map(n => 
                    <EachDiv key={n.toString()} id={`div${n}`} update={setDivVisibility}>{n}</EachDiv>
                )}
                <div className="scroll">
                    <ul>
                        {[1,2,3,4,5,6].map(n => (
                        <li key={n.toString()}>
                            div {n}:{' '}
                            <span className={divVisibility[`div${n}`]}>{divVisibility[`div${n}`]}</span>  
                        </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Link to={`/`}>ホームに戻る</Link>
                </div>
            </motion.div>
        </>
    );
};

export default Scroll;
*/