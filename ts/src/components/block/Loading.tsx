import React,{ useState, useEffect } from 'react';
import {motion} from "framer-motion";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
}

const EachDiv = (index:any) => {
    const { height, width } = useWindowDimensions();
    const max = Math.ceil(((width+200)/100)) * Math.ceil(((height+200)/100)+1);
    const delay = (index["index"]/(max*1.75));
    //console.log(delay.toFixed(3));
    return <motion.div className="loading__box" animate={{
      x: 10,
      y: -20,
      opacity: 0
    }}
    initial={{
      x: 0,
      y: 0,
      skew: "45deg, -45deg",
      opacity: 1
    }}
    exit={{
      x: 0,
      y: 0,
      skew: 0,
      scale: 1,
      rotateZ: 0,
      opacity: 1
    }}
    transition={{
      duration: .1,
      delay: delay
    }}></motion.div>
}
const EachDivs:any = () => {
    const { height, width } = useWindowDimensions();
    const loading_random = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
    return (
        <motion.div className={`loading loading_${loading_random}`} animate={{
            visibility: "hidden",
            opacity: 0,
            transition:{
                duration: .1,
                delay: .75
            }
            }}
            initial={{
            visibility: "visible",
            opacity: 1
            }}
            exit={{
            visibility: "visible",
            opacity: 1,
            transition:{
                duration: 0,
                delay: 0
            }
            }}
            >
            {
            (function () {
                const list = [];
                const max = Math.ceil(((width+200)/100)) * Math.ceil(((height+200)/100)+1);
                console.log(max);
                for (let n = 0; n < max; n++) {
                list.push(<EachDiv index={n} />)
                }
                return list;
            }())
            }

        </motion.div>
    )
}

export const Loading = () => {  
    return (
        <EachDivs />
    );
};