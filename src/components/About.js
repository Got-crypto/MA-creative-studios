import figures from '../images/figures.jpg'
import { motion } from 'framer-motion'

export default function About(){
    return(
        <div className="h-auto w-full mt-32 overflow-hidden flex md:flex-row flex-col md:justify-between max-w-screen-lg mx-auto items-center">
            <motion.div 
                initial={{
                    opacity: 0,
                    x: 100
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 1,
                }}
            className='flex flex-col justify-center items-center h-full'>
                <h1 className='text-primary justify-center h-24 text-2xl font-bold'>
                    About
                </h1>
                <p className='md:w-[30rem] w-96 text-justify'>
                    Please imagine business as a sport and your business as a team or an athlete and just
                     like any other sport competition is inevitable. And businesses that offer the same
                      products or services as you, are the opposition if your business has more 
                      clients, attains more revenue, and has a better reputation than that of the 
                      opposition! Then your business is a winning team or a champion athlete 
                      and if your clients are fewer, revenue lesser, and reputation worser than 
                      your competition then you unfortunately have a losing team or a failing athlete. 
                </p>
            </motion.div>
            <div className='w-56' />
            <motion.div 
                initial={{
                    opacity: 0,
                    x: -100
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 1,
                }}
            >
                <img src={figures} alt="chess" className='mt-4 md:mt-0' />
            </motion.div>
        </div>
    )
}