"use client"

import {motion} from "framer-motion"

export const MotionDiv = motion.div

// import React from 'react'

// interface MotionDiv{
//     children:React.ReactNode;
// }

// const MotionDiv = ({children}) => {

//     const varients = {
//     hidden:{opacity:0},
//     visible:{opacity:1},
//   }

//   return (
//     <motion.div 
//       className="max-w-sm rounded relative w-full"
//       variants={varients}
//       initial="hidden"
//       animate='visible'
//       transition={{
//         delay:1,
//         ease:'easeInOut',
//         duration:0.5,
//       }}
//       viewport={{amount:0}}
//     >
//         {children}
//     </motion.div>
//   )
// }

// export default MotionDiv