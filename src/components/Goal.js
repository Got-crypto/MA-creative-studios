import icon from '../images/business-logo.png'
import { motion } from 'framer-motion'

export default function Goal({setAbout, handleScroll}){

    const about = document.getElementById('about')

    console.log('aboutscrolY', about?.scrollHeight)

    setAbout(about)

    return(
        <div className="h-auto w-full relative z-30 bg-white" id='about'>
            <motion.div 
                initial={{
                    opacity: 0,
                    y: 100
                }}
                whileInView={{
                    opacity: 1,
                    y: 1
                }}
                transition={{
                    duration: 1
                }}

            className="h-auto max-w-screen-lg flex flex-col text-center justify-center items-center mx-auto">
                <img src={icon} onClick={ () => handleScroll('home') } alt='meta' className='cursor-pointer h-10 mt-10' />
                <h1 className='font-bold mt-3 text-2xl'>
                    Welcome to MA Creative Studios
                </h1>
                <p className='md:w-[50rem] w-[90%] text-base mt-2 font-regular'>
                    We are solely helping your business to get to the top and stay at the top through the provision
                     of our digital marketing services that work towards the attainment 
                     of your business objectives.
                </p>
            </motion.div>
        </div>
    )
}