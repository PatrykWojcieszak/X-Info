import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { GalleryAnim } from "../../../Animations/Animations_motion";
import styled from "styled-components/macro";
import { flexCenter } from "../../../resources/styles/helpers/mixins";
import { device } from "../../../resources/styles/helpers/breakpoints";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Gallery = ({ images }: galleryProps) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <StyledGallery as="div">
      <AnimatePresence initial={false} custom={direction}>
        <StyledImage
          as={motion.img}
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
      <StyledIconWrapper style={{ right: "10px" }} onClick={() => paginate(1)}>
        <FontAwesomeIcon icon="arrow-right" />
      </StyledIconWrapper>
      <StyledIconWrapper style={{ left: "10px" }} onClick={() => paginate(-1)}>
        <FontAwesomeIcon icon="arrow-left" />
      </StyledIconWrapper>
    </StyledGallery>
  );
};

type galleryProps = {
  images: Array<string>;
};

const StyledGallery = styled(flexCenter)`
  position: relative;
  height: 100vh;
  overflow-x: hidden;
`;

const StyledImage = styled(motion.img)`
  position: absolute;
  border-radius: 2rem;
  width: 100%;
  object-fit: cover;
  height: 70%;

  @media ${device.tablet} {
    width: 100vh;
  }
`;

const StyledIconWrapper = styled(flexCenter)`
  position: absolute;
  background: #fff;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  color: ${({ theme }) => theme.colors?.blue};
`;
