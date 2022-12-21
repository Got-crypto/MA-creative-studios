import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export default function HeroSection({handleScroll, setHome}){

    const home = document.getElementById("home") 
    
    setHome(home)
    
    useEffect(()=>{

        let hero = document.getElementById('bg-hero')

        window.addEventListener('scroll', ()=> {

            hero.style.backgroundPositionY = `${-window.scrollY}px`

        })
    }, [])

    return(
        <>
            <div className='fixed z-0 h-screen bg-hero bg-cover bg-no-repeat w-full' id="bg-hero">
                <div className="h-full w-full bg-black opacity-70" />
            </div>
            <div id="home" className="relative z-10 h-screen max-w-screen-lg mx-auto flex justify-center flex-col items-start ">
                <div className="px-10">
                    <div className="overflow-hidden">
                        <motion.p initial={{
                            y: -170
                        }} animate={{
                            y: 0
                        }} 
                            transition={{
                                duration: 1.5,
                                ease: "easeOut"
                          }}
                        
                        className="text-white font-hero text-5xl md:w-4/5 my-5">
                            Imagine <span className="text-primary">Business</span> as a sport
                        </motion.p>
                        <motion.p 
                            initial={{
                                x: -300
                            }} animate={{
                                x: 0
                            }} 
                                transition={{
                                    delay: 0.5,
                                    duration: 1.5,
                                    ease: "backOut"
                              }}
                        className="text-white font-regular text-md">An investment that gives a handsome return.</motion.p>
                    </div>
                    <button onClick={()=>handleScroll('newsletter')} className="p-4 bg-primary font-bold text-sm rounded-tl-2xl rounded-br-2xl mt-10" >
                        Learn more
                    </button>
                </div>
            </div>
        </>
    )
}