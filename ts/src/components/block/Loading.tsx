import React from "react";
import { motion} from "framer-motion";

const EachDiv = (index:any) => {
    return <motion.div className="loading__box" animate={{
      x: 10,
      y: -20,
      skew: -12,
      rotateZ: -10,
      opacity: 0
    }}
    initial={{
      x: 0,
      y: 0,
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
      duration: .3,
      delay: index["index"]/250
    }}></motion.div>
}
const EachDivs:any = () => {
    return (
        <motion.div className="loading" animate={{
            visibility: "hidden",
            opacity: 0,
            transition:{
                delay: 1
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
                delay: 0
            }
            }}
            >
            {
            (function () {
                const list = [];
                for (let n = 0; n < 250; n++) {
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