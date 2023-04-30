import ReactDOM from "react-dom";
import Button from "./Button";

const Modal = ({ children, onClose, className }) => {
  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} className=" fixed inset-0 bg-gray-600/60 "></div>
      <div
        className={`fixed inset-40 px-8 rounded-md flex justify-center items-start flex-col gap-3
        ${className}`}
      >
        {children}
      </div>
    </>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
