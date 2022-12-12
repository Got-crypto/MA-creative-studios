import { motion } from "framer-motion"
import { useEffect } from "react"

export default function ImageOverlay({setSelectedImage, selectedImage}){

    return(
        <div className={`fixed z-[60] h-full w-full ${ selectedImage ? 'flex' : 'hidden' } flex-col justify-center items-center`}>
            <div className="bg-black opacity-80 h-full w-full absolute" />
                        
            <div className="absolute h-full w-full justify-center items-center flex flex-col">
                <div className="w-full h-10 max-w-screen-lg">
                    <button onClick={()=>setSelectedImage()} className="h-5 w-5 ml-0 rounded-full text-white uppercase">
                        <svg 
                            className="w-8 h-8" 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                    </button>
                </div>

                <motion.img
                    animate={{
                        scale: selectedImage ? 1 : 0,
                        opacity: selectedImage ? 1 : 0 
                    }}
                src={selectedImage} alt="gallery overlay" className="h-[85vh] border-2 border-white rounded " id="image" />
            </div>
        </div>
    )
}