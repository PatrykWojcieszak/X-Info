import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//COMPONENTS
import { Backdrop } from "../";

//STYLES
import { modalAnim } from "../../../Animations/Animations_motion";

export const Modal = ({ closeModal, show, children }: modalProps) => {
  return (
    <>
      <Backdrop clicked={closeModal} show={show} />
      <StyledModal
        as={motion.div}
        initial="initial"
        animate="in"
        exit="out"
        variants={modalAnim}>
        <StyledCloseBtn icon="times" onClick={closeModal} />
        {children}
      </StyledModal>
    </>
  );
};

type modalProps = {
  closeModal: () => void;
  show: boolean;
  children: React.ReactNode;
};

const StyledModal = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: $blue;
  border-radius: 1rem;
  padding: 0.8rem;
  z-index: 999;
`;

const StyledCloseBtn = styled(FontAwesomeIcon)`
  position: absolute;
  top: -35px;
  cursor: pointer;
  right: 0;
  font-size: 2rem;
  z-index: 999;
  color: $red;
`;
