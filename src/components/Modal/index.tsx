import { ReactElement } from "react";
import { useEffect } from "react";
import ReactModal from "react-modal";

export interface ModalProps {
  isOpen: any;
  setIsOpen: (isOpen?: any) => void;
  children?: ReactElement;
}

const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  useEffect(() => {
    // eslint-disable-next-line
    if (isOpen !== isOpen) {
      setIsOpen(isOpen);
    }
  }, [isOpen, setIsOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={isOpen}
      ariaHideApp={false}
      closeTimeoutMS={200}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          border: "none",
          transition: "all ease-in-out 200ms",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
