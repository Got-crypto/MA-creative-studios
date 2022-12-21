import { motion } from "framer-motion"
import { useEffect } from "react"
import Logo from "./Logo"

export default function DropdownNav({navOpen, handleNavOpen, setNavOpen, handleScroll}){

    useEffect(()=>{
        window.addEventListener('resize', ()=> {
            if( window.innerWidth > 768 ){
                setNavOpen(false)
            }
        })
    }, [setNavOpen])

    return(
        <motion.div
            animate={{
                y: navOpen ? '24.5rem' : 0
            }}
            transition={{
                duration: 1,
                type: "spring"
            }}
        className="flex -top-[24.5rem] h-auto bg-slate-300 w-full absolute z-40 flex-col justify-center items-center">
            <div className="h-14 w-full flex flex-row justify-around items-center">
                <div className="h-12 cursor-pointer" onClick={()=>handleScroll('home')}>
                    <Logo  />
                </div>
                <svg
                    onClick={handleNavOpen}
                    className="w-12 h-12 cursor-pointer" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
            <motion.p animate={{
                rotateX: navOpen ? 0 : -90
            }} 
                transition={{
                    delay: 1,
                    type: 'spring'
                }}
            className="h-20 w-full mt-1 flex justify-center bg-primary hover:bg-transparent cursor-pointer items-center" onClick={() => handleScroll('about') }>About</motion.p>
            <motion.p animate={{
                rotateX: navOpen ? 0 : -90
            }} 
                transition={{
                    delay: 1,
                    type: 'spring'
                }}
            className="h-20 w-full mt-1 flex justify-center bg-primary hover:bg-transparent cursor-pointer items-center" onClick={() => handleScroll('services') }>Services</motion.p>
            <motion.p animate={{
                rotateX: navOpen ? 0 : -90
            }} 
                transition={{
                    delay: 1,
                    type: 'spring'
                }}
            className="h-20 w-full mt-1 flex justify-center bg-primary hover:bg-transparent cursor-pointer items-center" onClick={() => handleScroll('benefits') }>Benefits</motion.p>
            <motion.p animate={{
                rotateX: navOpen ? 0 : -90
            }} 
                transition={{
                    delay: 1,
                    type: 'spring'
                }}
            className="h-20 w-full mt-1 flex justify-center bg-primary hover:bg-transparent cursor-pointer items-center" onClick={() => handleScroll('gallery') }>Gallery</motion.p>
        </motion.div>
    )
}