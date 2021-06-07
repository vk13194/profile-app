import React from 'react'
import AboutSection from '../components/AboutSection'
import FaqSection from '../components/FaqSection'
import ServicesSection from '../components/ServicesSection'
import {motion} from 'framer-motion'
import {PageAnimation} from '../animation'
const AboutUs = () => {
    return (
        <motion.div exit="exit" variants={PageAnimation} initial="hidden" animate="show">
          <AboutSection /> 
          <ServicesSection />
          <FaqSection />
        </motion.div>
    )
}

export default AboutUs
