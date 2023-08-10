import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Accordion from "../components/Accordion";

const ModalPage = () => {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		setShowModal(false);
	};

	const modal = (
		<Modal onClose={closeModal} className="bg-white w-96">
			<h2 className="text-lg font-bold text-slate-700 leading-5">Hi, I am Modal</h2>
			<p className="text-gray-500">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate,
				sapiente architecto earum ea quaerat reprehenderit.
			</p>
			<Button primary className={"rounded-md"} onClick={closeModal}>
				Submit
			</Button>
		</Modal>
	);

	return (
		<div className="p-10">
			<h2 className="text-lg text-slate-600 p-4 font-semibold ">Modal Page</h2>
			<Button secondary onClick={() => setShowModal(true)}>
				Open Modal
			</Button>
			{showModal && modal}
		</div>
	);
};

export default ModalPage;
