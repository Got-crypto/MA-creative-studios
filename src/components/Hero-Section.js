import { motion } from "framer-motion"

export default function HeroSection(){
    return(
        <>
            <div className="fixed z-0 h-screen bg-hero bg-center bg-cover bg-no-repeat w-full">
                <div className="h-full w-full bg-black opacity-70" />
            </div>
            <div className="relative z-10 h-screen max-w-screen-lg mx-auto flex justify-center flex-col items-start ">
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
                        className="text-white font-light text-md">An investment that gives a handsome return.</motion.p>
                    </div>
                    <button className="p-4 bg-primary font-bold text-sm rounded-tl-2xl rounded-br-2xl mt-10" >
                        Learn more
                    </button>
                </div>
            </div>
        </>
    )
}