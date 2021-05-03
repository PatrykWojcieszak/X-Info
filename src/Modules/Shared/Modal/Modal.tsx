import React from "react";
import styled from "styled-components/macro";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//COMPONENTS
import { Backdrop } from "../";

//STYLES
import { modalAnim } from "../../../Animations/Animations_motion";
import { device } from "../../../resources/styles/helpers/breakpoints";

export const Modal = ({ closeModal, show, children }: modalProps) => {
  const [container] = React.useState(document.createElement("div"));
  const appRoot = document.getElementById("root") as HTMLElement;

  React.useEffect(() => {
    appRoot.appendChild(container);

    return () => {
      appRoot.removeChild(container);
    };
  }, [appRoot, container]);

  return ReactDOM.createPortal(
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
    </>,
    container
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
  width: 100%;

  @media ${device.mobile} {
    width: auto;
  }
`;

const StyledCloseBtn = styled(FontAwesomeIcon)`
  position: absolute;
  top: -35px;
  cursor: pointer;
  left: 10px;
  font-size: 2rem;
  z-index: 999;
  color: ${({ theme }) => theme.colors?.red};
`;
