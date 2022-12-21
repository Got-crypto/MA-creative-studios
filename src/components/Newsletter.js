import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Newsletter({handleScroll, setNewsletter}){

    const [isHovered, setIsHovered] = useState(false)
    const [btnHovered, setBtnHovered] = useState(false)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1025 ? true : false)
    
    console.log('isDesktop', isDesktop)

    const newsletter = document.getElementById('newsletter')

    setNewsletter(newsletter)

    useEffect(()=>{
        window.addEventListener('resize', ()=> {
            window.innerWidth >= 1025 ? setIsDesktop(true) : setIsDesktop(false)
        })

    }, [])

    return(
        isDesktop ? (
            <div id="newsletter" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className="h-[80vh] relative w-full bg-marvin bg-cover bg-center bg-no-repeat">
            <motion.div
                animate={{
                    opacity: isHovered ? .9 : .5
                }}
                transition={{
                    duration: 1
                }}
            className="h-full w-full py-10 absolute bg-[#333399]" />
            <div className="h-full absolute w-full flex flex-col justify-center items-center">
                <motion.h1
                    animate={{
                        y: isHovered ? 0 : 200
                    }}
                    transition={{
                        duration: 1
                    }}
                className="font-hero text-white text-3xl cursor-default">
                    MA Creative Studios
                </motion.h1>
                <div className="grid grid-cols-2 overflow-hidden py-5 cursor-default gap-8 text-lg text-justify  w-full max-w-screen-lg font-regular text-white">
                    <motion.p
                        animate={{
                            x: isHovered ? 0 : '-101%'
                        }}
                        transition={{
                            duration: 1,
                            delay: .5
                        }}
                    className="first-letter:text-6xl first-letter:font-extrabold first-letter:text-primary first-letter:lowercase">
                        Please imagine business as a sport and your business as a team or an athlete and just 
                        like any other sport competition is inevitable. And businesses that offer the same 
                        products or services as you, are the opposition if your business has more clients, 
                        attains more revenue, and has a better reputation than that of the opposition! 
                        Then your business is a winning team or a champion athlete and if your clients are 
                        fewer, revenue lesser, and reputation worser than your competition then you 
                        unfortunately have a losing team or a failing athlete.
                    </motion.p>
                    <motion.p 
                        animate={{
                            x: isHovered ? 0 : '101%'
                        }}
                        transition={{
                            duration: 1,
                            delay: 1
                        }}
                    >
                        Thus, we ask these two questions firstly what keeps businesses winning? And what lets 
                        losing businesses win? The answer! whether you want to hear it or not is marketing and 
                        honestly speaking no matter how big or small a business is it still needs the marketing 
                        function to make people aware of its existence and to stay relevant by not letting 
                        its clients forget its existence. And the anti-marketing businesspeople say a good 
                        product markets itself if that is so would all these great brands that we all know 
                        and love that have been running and will continue to for many years keep spending 
                        billions on marketing ..we think not! 
                    </motion.p>
                </div>
                <motion.div animate={{
                    y: isHovered ? 0 : '150%'
                }}
                    transition={{
                        duration: 1,
                        delay: 1.5
                    }}
                    onMouseEnter={()=>setBtnHovered(true)}
                    onMouseLeave={()=>setBtnHovered(false)}
                onClick={()=>handleScroll('services')} className="h-16 cursor-pointer overflow-hidden relative flex justify-center items-center uppercase font-bold font-regular shadow-md shadow-black rounded w-44 hover:border-primary hover:border">
                    <motion.div
                        animate={{
                            y: btnHovered ? '-100%' : 0
                        }}
                        transition={{
                            duration: .5
                        }}
                    className="absolute h-full w-full bg-primary    " />
                    <p className="absolute" >
                        Our Services
                    </p>
                </motion.div>
            </div>
        </div>
        ) : (
            <div id="newsletter" className="h-[100vh] md:h-[80vh] relative w-full bg-marvin bg-cover bg-center bg-no-repeat">
                <div className="h-full w-full absolute bg-[#333399] opacity-90" />
                <div className="h-full absolute w-full flex flex-col justify-center items-center">
                    <h1 className="font-hero text-white text-3xl cursor-default">
                        MA Creative Studios
                    </h1>
                    <div className="grid grid-cols-2 overflow-hidden py-5 cursor-default gap-8 text-sm text-justify  w-full max-w-screen-lg font-regular text-white">
                        <p className="first-letter:text-5xl first-letter:font-extrabold first-letter:text-primary first-letter:lowercase">
                            Please imagine business as a sport and your business as a team or an athlete and just 
                            like any other sport competition is inevitable. And businesses that offer the same 
                            products or services as you, are the opposition if your business has more clients, 
                            attains more revenue, and has a better reputation than that of the opposition! 
                            Then your business is a winning team or a champion athlete and if your clients are 
                            fewer, revenue lesser, and reputation worser than your competition then you 
                            unfortunately have a losing team or a failing athlete.
                        </p>
                        <p>
                            Thus, we ask these two questions firstly what keeps businesses winning? And what lets 
                            losing businesses win? The answer! whether you want to hear it or not is marketing and 
                            honestly speaking no matter how big or small a business is it still needs the marketing 
                            function to make people aware of its existence and to stay relevant by not letting 
                            its clients forget its existence. And the anti-marketing businesspeople say a good 
                            product markets itself if that is so would all these great brands that we all know 
                            and love that have been running and will continue to for many years keep spending 
                            billions on marketing ..we think not! 
                        </p>
                    </div>
                    <button onClick={()=>handleScroll('services')} className="h-16 cursor-pointer overflow-hidden relative flex justify-center items-center uppercase font-bold font-regular shadow-md bg-primary shadow-black rounded w-44 hover:border-primary hover:border">
                        Our Services
                    </button>
                </div>
            </div>
        )
    )
}