import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AliceCarousel from "react-alice-carousel";

import styles from "./Gallery.module.scss";
import { GalleryAnim } from "../../../Animations/Animations_motion";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Gallery = ({ images }: galleryProps) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // const handleDragStart = (e) => e.preventDefault();
  // const galleryItems: JSX.Element[] = [];
  // images.map((img) => {
  //   galleryItems.push(
  //     <img
  //       src={img}
  //       onDragStart={handleDragStart}
  //       alt="rocket img"
  //       className={styles.Img}
  //     />
  //   );
  // });

  return (
    <>
      <div className={styles.Gallery}>
        {/* <h2>GALLERY</h2> */}
        {/* <AliceCarousel mouseTracking items={galleryItems} /> */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={GalleryAnim}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
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
        <div className={styles.Next} onClick={() => paginate(1)}>
          <FontAwesomeIcon icon="arrow-right" />
        </div>
        <div className={styles.Prev} onClick={() => paginate(-1)}>
          <FontAwesomeIcon icon="arrow-left" />
        </div>
      </div>
    </>
  );
};

type galleryProps = {
  images: Array<string>;
};

export default Gallery;
