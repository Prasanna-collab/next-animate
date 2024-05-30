"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BasicsOfMotion: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return (
        <div style={{
            display: "grid",
            placeContent: "center",
            height: "100vh",
            gap: "0.8rem"
        }}>
            <h1 className='text-center mx-auto'>Basics of Motion</h1>
            <motion.button
                className='border-2 border-purple-600 p-3 rounded-xl text-white font-semibold bg-purple-600 hover:bg-white hover:text-purple-600'
                onClick={() => setIsVisible(!isVisible)}
                layout="position">
                Show/Hide
            </motion.button>
            <AnimatePresence mode="popLayout">
                {isVisible && (
                    <motion.div
                    className='w-40 h-40 bg-purple-600'
                        key="box"
                        initial={{ scale: 0, rotate: 0, y:0 }}
                        animate={{ scale: 1, rotate: 360,  y:[0,150,-150,-150,0] }}
                        //Y:[looks for the distance at the scheduled time travels.]
                        transition={{ duration: 2, ease: "easeIn" , times:[0,0.25,0.5,0.85,1]}}
                        //times:[looks for the amount of time which the keyframes shud long last.]
                        exit={{ rotate: 0, scale: 0,y:[0,150,-150,-150,0] }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

export default BasicsOfMotion;
