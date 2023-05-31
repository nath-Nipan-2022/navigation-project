import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
Button;

const ModalPage = () => {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		setShowModal(false);
	};

	const modal = (
		<Modal onClose={closeModal} className="bg-blue-100">
			<h2 className="text-lg ">Hi, I am Modal</h2>
			<p className="text-gray-600 text-sm mb-1">
				Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
			</p>
			<Button secondary onClick={closeModal}>
				Submit
			</Button>
		</Modal>
	);

	return (
		<div className="p-10">
			<Button secondary onClick={() => setShowModal(true)}>
				Open Modal
			</Button>
			{showModal && modal}
		</div>
	);
};

export default ModalPage;
