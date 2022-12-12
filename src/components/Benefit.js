import { motion } from "framer-motion"
import { useState } from "react"

export default function Benefit({mock, text, reverse}){

    const [animate, setAnimate] = useState(false)


    return(
        <motion.div 
                    onMouseEnter={()=>setAnimate(true)}
                    onMouseLeave={()=>setAnimate(false)}
         className="h-[25rem] rounded-md relative overflow-hidden w-96 flex mx-auto justify-center items-center">
            <motion.div animate={{
                scale: animate ? 1 : 1.1
            }}
            transition={{
                duration: 1
            }}  
            
            className={`absolute h-full w-full ${ mock === 'engineer' ? 'bg-engineering' : mock === 'handshake' ? 'bg-handshake' : mock === 'revenue' ? 'bg-revenue' : mock === 'relationship' ? 'bg-relationship' : mock === 'brand' ? 'bg-brand' : ''  } bg-cover bg-center bg-no-repeat`} />
            <motion.div animate={{
                x: animate ? 0 : '100%'
            }}
                transition={{
                    duration: 1
                }}
            className="absolute h-full w-full">
                <div className="absolute h-full w-full bg-primary opacity-50" />
                <div className="absolute cursor-default text-2xl flex justify-center items-center text-center font-bold font-regular h-full w-full text-white">
                    {text}
                </div>
            </motion.div>
        </motion.div>
    )
}