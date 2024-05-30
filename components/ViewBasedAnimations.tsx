"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from "framer-motion";



const ViewBasedAnimations: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    //without options => isInView changes over all the time whenever we view the component. 
    //useInView isthe helper hook used to identify whether the screen is viewed or not.

    useEffect(()=> {
        console.log("Is in view =>", isInView);
    },[isInView])

    return <div className='grid place-content-center mx-auto'>
        <h1>View Based Animations Basics</h1>
        <div className='h-[100vh]'/>
        <motion.div
            className='h-screen w-screen bg-black'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
        </motion.div>
        <div ref={ref}
        className={`h-screen ${isInView? "bg-gray-700":"bg-black"} transition-all duration-1000`}
        >

        </div>
    </div>
}

export default ViewBasedAnimations;