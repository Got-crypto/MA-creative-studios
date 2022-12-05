import meta from '../images/meta.png'
import { motion } from 'framer-motion'
import About from './About'

export default function Goal(){
    return(
        <div className="h-auto pb-52 w-full relative z-30 bg-white shadow-lg shadow-black">
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
                <img src={meta} alt='meta' className='h-10 mt-10' />
                <h1 className='font-bold mt-3 text-2xl'>
                    Welcome to MA Creative Studios
                </h1>
                <p className='md:w-[50rem] w-[90%] text-sm mt-2'>
                    We are solely helping your business to get to the top and stay at the top through the provision
                     of our digital marketing services that work towards the attainment 
                     of your business objectives.
                </p>
            </motion.div>
            <About />
        </div>
    )
}