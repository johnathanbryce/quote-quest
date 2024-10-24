import React from "react";
import styles from "./Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div className={styles.modal_container} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modal_close} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modal_content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
