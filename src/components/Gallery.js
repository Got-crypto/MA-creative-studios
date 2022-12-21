import gallery1 from '../images/OD/gallery-1.jpg'
import gallery2 from '../images/OD/gallery-2.jpg'
import gallery3 from '../images/OD/gallery-3.jpg'
import gallery4 from '../images/OD/gallery-4.jpg'

import { motion, AnimatePresence } from 'framer-motion'
import SlideShow from './SlideShow.js'
import { useState } from 'react'

export default function Gallery({setGallery, handleImageOverlay}){

    const gallery = document.getElementById('gallery')

  const [showButtons, setShowButtons] = useState(false)

    const content = [
        gallery1, gallery2, gallery3, gallery4
    ]

    setGallery(gallery)

    return(
        <motion.div 
            whileInView={()=>showButtons(true)}
            className="md:h-[80vh] h-[70vh] overflow-hidden  flex justify-center items-center relative bg-[#123]" id="gallery">
                <SlideShow
                    showButtons={showButtons}
                />
        </motion.div>
    )
}

{/* <div className="h-full mx-auto max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                <motion.div whileHover={{
                    scale: 1.1
                }} onClick={()=>handleImageOverlay(gallery1)} className="h-64 w-64 mx-auto my-2 rounded bg-gallery1 bg-cover cursor-zoom-in bg-center bg-no-repeat border-2 border-white relative overflow-hidden" />
                <motion.div whileHover={{
                    scale: 1.1
                }} onClick={()=>handleImageOverlay(gallery2)} className="h-64 w-64 mx-auto rounded my-2 cursor-zoom-in bg-gallery2 bg-cover bg-center bg-no-repeat border-2 border-white relative overflow-hidden" />
                <motion.div whileHover={{
                    scale: 1.1
                }} onClick={()=>handleImageOverlay(gallery3)} className="h-[28rem] w-56 my-2 mx-auto cursor-zoom-in rounded bg-gallery3 bg-cover bg-center bg-no-repeat border-2 border-white relative overflow-hidden" />
                <motion.div whileHover={{
                    scale: 1.1
                }} onClick={()=>handleImageOverlay(gallery4)} className="h-56 w-[28rem] mx-auto cursor-zoom-in rounded bg-gallery4 bg-cover bg-center bg-no-repeat border-2 border-white relative overflow-hidden" />
            </div> */}