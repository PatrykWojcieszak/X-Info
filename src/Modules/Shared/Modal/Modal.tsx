import React from "react";
import Backdrop from "../Backdrop/Backdrop";

import styles from "./Modal.module.scss";

const Modal = ({ closeModal, show }: modalProps) => {
  return (
    <>
      <Backdrop clicked={closeModal} show={show} />
      <div className={styles.Content}>asdfuasdf</div>
    </>
  );
};

type modalProps = {
  closeModal: () => void;
  show: boolean;
};

export default Modal;
