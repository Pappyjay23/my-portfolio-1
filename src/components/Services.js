import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import {BsPaletteFill} from "react-icons/bs"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 2
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Web Development</p>
                        <p className='services-desc'>I use various web technologies to develop attractive,creative, interactive, responsive and functional website layouts. </p>
                    </div>
                    <div className="services-card">
                        <BsPaletteFill className='services-icon' />
                        <p className='services-title'>Graphic Design</p>
                        <p className='services-desc'>I create captivating and high quality graphics and logo designs where user readability, coupled with best design practices are prioritized</p>
                    </div>
                    <div className="services-card">
                        <IoColorWandOutline className='services-icon' />
                        <p className='services-title'>UI Design</p>
                        <p className='services-desc'>I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
