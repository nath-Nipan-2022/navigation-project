import ReactDOM from "react-dom";
import Button from "./Button";
import React from "react";

const Modal = ({ children, onClose, className }) => {
	return ReactDOM.createPortal(
		<>
			<div onClick={onClose} className="absolute inset-0 bg-gray-600/60"></div>
			<div
				className={`absolute p-8 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-md flex justify-center items-start flex-col gap-3
        ${className}`}
			>
				{children}
			</div>
		</>,
		document.querySelector(".modal-container")
	);
};

export default Modal;
