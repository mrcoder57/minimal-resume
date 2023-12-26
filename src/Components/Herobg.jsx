import React from 'react';
import { motion } from "framer-motion";
import { marqueeVariants } from '../utils/motion';
import { skills } from '../constants';

const Herobg = () => {
 return (
   <div className='text-3xl mt-32 hidden lg:flex'>
     <motion.div
       variants={marqueeVariants}
       animate="animate"
     >
         <div className=' flex flex-row gap-10'>
       {skills.map((skill,index) => (
         <div key={index} >
           <img src={skill.image} srcset="" className=' h-20 w-full' draggable={false} />
         </div>
       ))}
       </div>
     </motion.div>
   </div>
 )
}

export default Herobg;
