import { useEffect, useState } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";

export default function StickyNav({handleScroll}){

    const [position, setPosition] = useState(0)

    useEffect(()=>{

        window.addEventListener('scroll', ()=> {
            setPosition(window.scrollY)
        })

    })

    return (
        <motion.div 
            initial={{
                y: -100
            }}
        animate={{
            y: position > 642 && window.innerWidth > 768 ? 0 : '-5rem'
        }}
        transition={{
            bounce: !1
        }}
        className="fixed md:flex h-12 w-full bg-[#232323] top-0 justify-center items-center z-50">
            <div className="h-full w-full max-w-screen-lg flex flex-row justify-between items-center">
                <Logo />
                <div className="flex flex-row justify-between items-center h-full">
                    <p className="text-xl text-white mx-2 hover:underline cursor-pointer" onClick={() => handleScroll('about') }>About</p>
                    <p className="text-xl text-white mx-2 hover:underline cursor-pointer" onClick={() => handleScroll('services') }>Services</p>
                    <p className="text-xl text-white mx-2 hover:underline cursor-pointer" onClick={() => handleScroll('benefits') }>benefits</p>
                    <p className="text-xl text-white mx-2 hover:underline cursor-pointer" onClick={() => handleScroll('gallery') }>Gallery</p>
                </div>
            </div>
        </motion.div>
    )
}