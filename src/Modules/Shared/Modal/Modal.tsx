import React from "react";

//COMPONENTS
import Backdrop from "../Backdrop/Backdrop";

//STYLES
import styles from "./Modal.module.scss";

const Modal = ({ closeModal, show, children }: modalProps) => {
  return (
    <>
      <Backdrop clicked={closeModal} show={show} />
      <div className={styles.Content}>{children}</div>
    </>
  );
};

type modalProps = {
  closeModal: () => void;
  show: boolean;
  children: React.ReactNode;
};

export default Modal;
