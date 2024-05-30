"use client";
import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';


const ScrollBasedAnimations = () => {
    const { scrollYProgress } = useScroll();

//to perform the scroll based animation
    const scaleX =  useSpring(scrollYProgress);
//to perform any color changes
    const background = useTransform(scrollYProgress, [0,1], ["rgb(86,1,245)", "rgb(1,245,13)"]);
    return <>
        <div>
            <motion.div
                className={`
       transform
    //    scale-x-${scrollYProgress}
       origin-left 
       sticky top-0 w-full h-2`}
    //    style={{scaleX:scrollYProgress}}
    //it has to be in style prop
    style={{scaleX, background}}
            >


            </motion.div>
            <div>
                <div className='my-6 py-2 max-w-7/10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perspiciatis officiis, ea dolores exercitationem voluptatem ratione itaque maxime corrupti laboriosam sequi hic reiciendis? Et laboriosam in fuga assumenda dolorum, tenetur ipsa sapiente adipisci maiores reiciendis illum perferendis exercitationem veritatis rem neque eius, qui debitis ad ullam esse. Quis, ullam excepturi?
                </div>
                <div className='my-2 py-2 max-w-7/10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis accusamus aliquam quos illum, at assumenda incidunt officia commodi facere libero saepe, fugit necessitatibus voluptatem esse optio? Cum aliquam, nam natus fugiat veniam deserunt temporibus et molestias voluptatibus iusto minima labore, qui harum asperiores id sunt maxime quisquam quaerat, quae deleniti perferendis! Ipsum eligendi, vero, deleniti laborum ipsa quae impedit dicta magnam et cupiditate dolor nostrum dignissimos itaque quos suscipit qui vel beatae omnis illo, architecto dolorem inventore? Officia quaerat reprehenderit minima unde inventore neque eveniet incidunt. Facilis vitae eius et, provident quod culpa earum nam tempora sit. Et, officiis.
                </div>
                <div className='my-2 py-2 max-w-7/10'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quod sequi reprehenderit atque nisi tempora. Modi ipsa vel labore accusamus. Quisquam molestias nulla itaque autem tempore sequi doloremque, optio, magnam voluptatum officia repellendus sed. Amet, delectus rerum dolore vel, accusamus non, vitae voluptate earum nobis perferendis perspiciatis voluptates? Dolor dolore animi iure quasi libero, alias nisi quisquam nostrum fugiat neque aut atque quae culpa minima doloribus cum veniam dolorum rerum quas ea voluptatum odio voluptates optio unde! Facere, odit commodi sed fuga ipsam consequatur iusto autem assumenda eum suscipit, delectus deleniti ipsum nesciunt magnam praesentium laudantium, reiciendis ad dolore dolorum!
                </div>
                <div className='my-2 py-2 max-w-7/10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut necessitatibus eveniet saepe repellat sint totam doloribus quia delectus, velit voluptate magni provident sed hic sapiente vero cum consectetur laboriosam facilis, iure sunt reprehenderit. Ratione repudiandae animi unde doloremque accusantium cumque accusamus nesciunt facere! Eius corrupti quod neque labore numquam, non assumenda libero qui saepe, odio, dignissimos ex sequi corporis earum alias sunt officia! Enim, tempore dicta? Voluptates hic in, doloribus magnam commodi excepturi laborum temporibus voluptatibus, eos beatae aut accusantium architecto sit corporis debitis quia minus illum nostrum blanditiis dicta, officia quis veniam! Illo quos dignissimos nesciunt inventore enim!</div>

                <div className='my-2 py-2 max-w-7/10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis accusamus aliquam quos illum, at assumenda incidunt officia commodi facere libero saepe, fugit necessitatibus voluptatem esse optio? Cum aliquam, nam natus fugiat veniam deserunt temporibus et molestias voluptatibus iusto minima labore, qui harum asperiores id sunt maxime quisquam quaerat, quae deleniti perferendis! Ipsum eligendi, vero, deleniti laborum ipsa quae impedit dicta magnam et cupiditate dolor nostrum dignissimos itaque quos suscipit qui vel beatae omnis illo, architecto dolorem inventore? Officia quaerat reprehenderit minima unde inventore neque eveniet incidunt. Facilis vitae eius et, provident quod culpa earum nam tempora sit. Et, officiis.
                </div>
                <div className='my-2 py-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quod sequi reprehenderit atque nisi tempora. Modi ipsa vel labore accusamus. Quisquam molestias nulla itaque autem tempore sequi doloremque, optio, magnam voluptatum officia repellendus sed. Amet, delectus rerum dolore vel, accusamus non, vitae voluptate earum nobis perferendis perspiciatis voluptates? Dolor dolore animi iure quasi libero, alias nisi quisquam nostrum fugiat neque aut atque quae culpa minima doloribus cum veniam dolorum rerum quas ea voluptatum odio voluptates optio unde! Facere, odit commodi sed fuga ipsam consequatur iusto autem assumenda eum suscipit, delectus deleniti ipsum nesciunt magnam praesentium laudantium, reiciendis ad dolore dolorum!
                </div> <div className='my-2 py-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis accusamus aliquam quos illum, at assumenda incidunt officia commodi facere libero saepe, fugit necessitatibus voluptatem esse optio? Cum aliquam, nam natus fugiat veniam deserunt temporibus et molestias voluptatibus iusto minima labore, qui harum asperiores id sunt maxime quisquam quaerat, quae deleniti perferendis! Ipsum eligendi, vero, deleniti laborum ipsa quae impedit dicta magnam et cupiditate dolor nostrum dignissimos itaque quos suscipit qui vel beatae omnis illo, architecto dolorem inventore? Officia quaerat reprehenderit minima unde inventore neque eveniet incidunt. Facilis vitae eius et, provident quod culpa earum nam tempora sit. Et, officiis.
                </div>
                <div className='my-2 py-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quod sequi reprehenderit atque nisi tempora. Modi ipsa vel labore accusamus. Quisquam molestias nulla itaque autem tempore sequi doloremque, optio, magnam voluptatum officia repellendus sed. Amet, delectus rerum dolore vel, accusamus non, vitae voluptate earum nobis perferendis perspiciatis voluptates? Dolor dolore animi iure quasi libero, alias nisi quisquam nostrum fugiat neque aut atque quae culpa minima doloribus cum veniam dolorum rerum quas ea voluptatum odio voluptates optio unde! Facere, odit commodi sed fuga ipsam consequatur iusto autem assumenda eum suscipit, delectus deleniti ipsum nesciunt magnam praesentium laudantium, reiciendis ad dolore dolorum!
                </div>
                <div className='my-2 py-2 max-w-7/10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis accusamus aliquam quos illum, at assumenda incidunt officia commodi facere libero saepe, fugit necessitatibus voluptatem esse optio? Cum aliquam, nam natus fugiat veniam deserunt temporibus et molestias voluptatibus iusto minima labore, qui harum asperiores id sunt maxime quisquam quaerat, quae deleniti perferendis! Ipsum eligendi, vero, deleniti laborum ipsa quae impedit dicta magnam et cupiditate dolor nostrum dignissimos itaque quos suscipit qui vel beatae omnis illo, architecto dolorem inventore? Officia quaerat reprehenderit minima unde inventore neque eveniet incidunt. Facilis vitae eius et, provident quod culpa earum nam tempora sit. Et, officiis.
                </div>
                <div className='my-2 py-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quod sequi reprehenderit atque nisi tempora. Modi ipsa vel labore accusamus. Quisquam molestias nulla itaque autem tempore sequi doloremque, optio, magnam voluptatum officia repellendus sed. Amet, delectus rerum dolore vel, accusamus non, vitae voluptate earum nobis perferendis perspiciatis voluptates? Dolor dolore animi iure quasi libero, alias nisi quisquam nostrum fugiat neque aut atque quae culpa minima doloribus cum veniam dolorum rerum quas ea voluptatum odio voluptates optio unde! Facere, odit commodi sed fuga ipsam consequatur iusto autem assumenda eum suscipit, delectus deleniti ipsum nesciunt magnam praesentium laudantium, reiciendis ad dolore dolorum!
                </div> <div className='my-2 py-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis accusamus aliquam quos illum, at assumenda incidunt officia commodi facere libero saepe, fugit necessitatibus voluptatem esse optio? Cum aliquam, nam natus fugiat veniam deserunt temporibus et molestias voluptatibus iusto minima labore, qui harum asperiores id sunt maxime quisquam quaerat, quae deleniti perferendis! Ipsum eligendi, vero, deleniti laborum ipsa quae impedit dicta magnam et cupiditate dolor nostrum dignissimos itaque quos suscipit qui vel beatae omnis illo, architecto dolorem inventore? Officia quaerat reprehenderit minima unde inventore neque eveniet incidunt. Facilis vitae eius et, provident quod culpa earum nam tempora sit. Et, officiis.
                </div>
                <div className='my-2 py-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quod sequi reprehenderit atque nisi tempora. Modi ipsa vel labore accusamus. Quisquam molestias nulla itaque autem tempore sequi doloremque, optio, magnam voluptatum officia repellendus sed. Amet, delectus rerum dolore vel, accusamus non, vitae voluptate earum nobis perferendis perspiciatis voluptates? Dolor dolore animi iure quasi libero, alias nisi quisquam nostrum fugiat neque aut atque quae culpa minima doloribus cum veniam dolorum rerum quas ea voluptatum odio voluptates optio unde! Facere, odit commodi sed fuga ipsam consequatur iusto autem assumenda eum suscipit, delectus deleniti ipsum nesciunt magnam praesentium laudantium, reiciendis ad dolore dolorum!
                </div>    <div className='my-2 py-2 max-w-7/10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis accusamus aliquam quos illum, at assumenda incidunt officia commodi facere libero saepe, fugit necessitatibus voluptatem esse optio? Cum aliquam, nam natus fugiat veniam deserunt temporibus et molestias voluptatibus iusto minima labore, qui harum asperiores id sunt maxime quisquam quaerat, quae deleniti perferendis! Ipsum eligendi, vero, deleniti laborum ipsa quae impedit dicta magnam et cupiditate dolor nostrum dignissimos itaque quos suscipit qui vel beatae omnis illo, architecto dolorem inventore? Officia quaerat reprehenderit minima unde inventore neque eveniet incidunt. Facilis vitae eius et, provident quod culpa earum nam tempora sit. Et, officiis.
                </div>
                <div className='my-2 py-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quod sequi reprehenderit atque nisi tempora. Modi ipsa vel labore accusamus. Quisquam molestias nulla itaque autem tempore sequi doloremque, optio, magnam voluptatum officia repellendus sed. Amet, delectus rerum dolore vel, accusamus non, vitae voluptate earum nobis perferendis perspiciatis voluptates? Dolor dolore animi iure quasi libero, alias nisi quisquam nostrum fugiat neque aut atque quae culpa minima doloribus cum veniam dolorum rerum quas ea voluptatum odio voluptates optio unde! Facere, odit commodi sed fuga ipsam consequatur iusto autem assumenda eum suscipit, delectus deleniti ipsum nesciunt magnam praesentium laudantium, reiciendis ad dolore dolorum!
                </div> <div className='my-2 py-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis accusamus aliquam quos illum, at assumenda incidunt officia commodi facere libero saepe, fugit necessitatibus voluptatem esse optio? Cum aliquam, nam natus fugiat veniam deserunt temporibus et molestias voluptatibus iusto minima labore, qui harum asperiores id sunt maxime quisquam quaerat, quae deleniti perferendis! Ipsum eligendi, vero, deleniti laborum ipsa quae impedit dicta magnam et cupiditate dolor nostrum dignissimos itaque quos suscipit qui vel beatae omnis illo, architecto dolorem inventore? Officia quaerat reprehenderit minima unde inventore neque eveniet incidunt. Facilis vitae eius et, provident quod culpa earum nam tempora sit. Et, officiis.
                </div>
                <div className='my-2 py-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quod sequi reprehenderit atque nisi tempora. Modi ipsa vel labore accusamus. Quisquam molestias nulla itaque autem tempore sequi doloremque, optio, magnam voluptatum officia repellendus sed. Amet, delectus rerum dolore vel, accusamus non, vitae voluptate earum nobis perferendis perspiciatis voluptates? Dolor dolore animi iure quasi libero, alias nisi quisquam nostrum fugiat neque aut atque quae culpa minima doloribus cum veniam dolorum rerum quas ea voluptatum odio voluptates optio unde! Facere, odit commodi sed fuga ipsam consequatur iusto autem assumenda eum suscipit, delectus deleniti ipsum nesciunt magnam praesentium laudantium, reiciendis ad dolore dolorum!
                </div>
            </div>
        </div>
    </>


}

export default ScrollBasedAnimations