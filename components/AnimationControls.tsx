"use client";
import React from 'react';
import { motion, MotionConfig, useAnimationControls } from 'framer-motion';

const AnimationControls: React.FC = () => {
    const controls = useAnimationControls();

    const handleClick = () => {
        controls.start({
            rotate: "360deg",
            transition: { duration: 2, ease: "easeInOut" }
        }).then(() => {
            controls.set({ rotate: "0deg" });
        });
    }

    return (
        <div className="grid place-content-center h-screen gap-2">
            <h1 className='mx-auto text-center'>Animation Control Basics</h1>
            <MotionConfig>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, rotate: "2.5deg" }}
                    transition={{ duration: 0.125, ease: "easeIn" }}
                    className='border-2 border-purple-600 p-3 rounded-xl text-white font-semibold bg-purple-600'
                    onClick={handleClick}
                >
                    Flip it!
                </motion.button>
                <motion.div
                    className='bg-red-600 w-64 h-64'
                    initial={{ rotate: "0deg" }}
                    animate={controls}
                >
                </motion.div>
            </MotionConfig>
        </div>
    );
}

export default AnimationControls;
