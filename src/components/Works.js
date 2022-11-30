import React from 'react';
import "../styles/Works.css"
import { IoOpenOutline} from "react-icons/io5"
import { FiFolder, FiGithub} from "react-icons/fi"
import {WorkData} from "../data/WorkData"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Works = () => {

    const fade = {
        opacity: 1,
        transition:{
            duration: 2
        }
    }

  return(
      <>
          <div className="works" id='works'>
            <div className="container">
                <motion.div initial={{opacity: 0}} whileInView={fade} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">I build real value</p>
                    <p className='heading-text'>Works</p>
                </motion.div>

                <motion.div className="works-box" initial={{opacity: 0}} whileInView={fade}>
                    {WorkData.map((w, index)=>{
                        return(
                            <div key={index}>
                                <Link  to={w.site} target='_blank' className='work-link-group'>
                                    <div className="works-card">
                                        <div className="works-container">
                                            <div className="top-work">
                                                <FiFolder className='work-folder' />
                                                <div className="right">
                                                    <Link className='work-git' to={w.gitlink} target='_blank'><FiGithub /></Link>
                                                    <Link className='work-link' to={w.site} target='_blank'><IoOpenOutline /></Link>
                                                </div>
                                            </div>
                                            <div className="mid-work">
                                                <p className='work-title'>{w.title}</p>
                                                <p className='work-desc'>{w.desc}</p>
                                            </div>
                                            <div className="bottom-work">
                                                {w.tech.map((e, index) =>{
                                                    return (
                                                        <small key={index}>{e}</small>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </motion.div>

            </div>
          </div>
      </>
  )
};

export default Works;
