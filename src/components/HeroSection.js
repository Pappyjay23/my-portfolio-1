import React, { useState } from "react";
import "../styles/HeroSection.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const HeroSection = ({ nav, handleNav }) => {
	const scrollToTop = () => {
		scroll.scrollToTop({ smooth: "linear" });
	};

	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	window.addEventListener("scroll", toggleVisible);

	const heroVariants = {
		hidden: {
			opacity: 0,
			y: "-50%",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

	const contactVariants = {
		hidden: {
			opacity: 0,
			x: "-50%",
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

	const menuVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			scale: [1, 1.2, 1.5, 1.2, 1],
			rotate: [0, 0, 360, 360, 360],
			borderRadius: ["50%", "50%", "50%", "50%", "50%"],
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<div className='hero-section' name='home' id='home'>
			<div className='hero-overlay'></div>
			<motion.div
				// viewport={{ once: true }}
				variants={menuVariants}
				initial='hidden'
				whileInView='visible'
				onClick={handleNav}
				className='menu-icon'>
				{nav ? <FaTimes /> : <FaBars />}
			</motion.div>
			<motion.div
				variants={heroVariants}
				initial='hidden'
				whileInView='visible'
				className={visible ? "to-top-icon show" : "to-top-icon hide"}
				onClick={scrollToTop}>
				<AiOutlineArrowUp />
			</motion.div>
			<motion.div
				variants={heroVariants}
				initial='hidden'
				whileInView='visible'
				className='hero-content'>
				<p className='hero-intro'>
					<span>Peace</span> <span>Jinadu-Paul.</span>
				</p>
				<p className='hero-desc'>
					I'm a <span className='hero-desc-sub'>Web Developer.</span>
				</p>
			</motion.div>
			<motion.span
				variants={contactVariants}
				initial='hidden'
				whileInView='visible'>
				<a
					href='Peace Jinadu-Paul CV.pdf'
					download='Peace Jinadu-Paul CV'
					className='hero-contact'>
					Download CV <BiDownload className='cv-icon' />
				</a>
			</motion.span>
		</div>
	);
};

export default HeroSection;
