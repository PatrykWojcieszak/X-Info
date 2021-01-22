import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//COMPONENTS
import Backdrop from "../Backdrop/Backdrop";

//STYLES
import styles from "./Modal.module.scss";
import { modalAnim } from "../../../Animations/Animations_motion";

const Modal = ({ closeModal, show, children }: modalProps) => {
  return (
    <>
      <Backdrop clicked={closeModal} show={show} />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={modalAnim}
        className={styles.Content}>
        <FontAwesomeIcon
          icon="times"
          className={styles.CloseBtn}
          onClick={closeModal}
        />
        {children}
      </motion.div>
    </>
  );
};

type modalProps = {
  closeModal: () => void;
  show: boolean;
  children: React.ReactNode;
};

export default Modal;
