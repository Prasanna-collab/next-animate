"use client";
import React from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

interface Props { }

const Gestures = () => {
    return (
        <div className="grid place-content-center h-screen gap-2">
            <h1 className='mx-auto text-center'>Gestures Basics</h1>

<MotionConfig transition={{duration:0.125, ease:"easeInOut"}}>
                {/* motion config used to resue the transition,animate property used repeatedly inside the component! */}
<motion.button 
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95, rotate:"2.5deg"}}
            className='border-2 
            border-purple-600 p-3 rounded-xl 
            text-white font-semibold bg-purple-600'>
                Click me!
            </motion.button>
<motion.button 
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95, rotate:"-2.5deg"}}
            className='border-2 
            border-red-600 p-3 rounded-xl 
            text-white font-semibold bg-red-600'>
                Click me!
            </motion.button>

</MotionConfig>
           
            <AnimatePresence mode="popLayout">
                {/* Animate Presence will check for the exit property in the motion tag. if there, it will add animations while exiting. */}
                <motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Gestures;
