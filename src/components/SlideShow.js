import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import gallery1 from '../images/OD/gallery-1.jpg'
import gallery2 from '../images/OD/gallery-2.jpg'
import gallery3 from '../images/OD/gallery-3.jpg'
import gallery4 from '../images/OD/gallery-4.jpg'

const images = [
  gallery1, gallery2, gallery3, gallery4
]

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function SlideShow({showButtons}){
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="absolute max-w-[90vw] h-full"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="left-[10px] select-none text-[18px] z-[2] cursor-pointer font-bold  h-[40px] flex justify-center items-center  absolute bg-white rounded-[30px] w-[40px]  " onClick={() => paginate(1)}>
        <svg 
          className="w-6 h-6" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      </div>
      <div className="right-[10px] select-none text-[18px] z-[2] cursor-pointer font-bold  h-[40px] flex justify-center items-center  absolute bg-white rounded-[30px] w-[40px]" onClick={() => paginate(-1)}>
        <svg 
          className="w-6 h-6" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </>
  );
};
