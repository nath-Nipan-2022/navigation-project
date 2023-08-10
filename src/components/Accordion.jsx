import React from "react";
import { useState } from "react";
import {
	MdChevronRight,
	MdKeyboardArrowDown,
	MdKeyboardArrowUp,
} from "react-icons/md";

import { useContext } from "react";
import AccordionContext from "../context/accordionContext";

const Accordion = ({ items }) => {
	const { expandedIndex, handleAccChange } = useContext(AccordionContext);
	console.log({ expandedIndex });

	const handleClick = (i) => {
		// setExpandedIndex((current) => {
		// 	if (current === i) return null; // if user clicks same accordion
		// 	return i;
		// });
		handleAccChange({ index: i });
	};
	// render items
	const renderItems = items.map((item, i) => {
		let isOpen = expandedIndex === i;

		return (
			<div key={i}>
				<h3
					onClick={() => handleClick(i)}
					className="flex justify-between gap-4 p-4 font-medium cursor-pointer border-t bg-[#f7f7f7] text-slate-800 leading-6"
				>
					<span>{item.label}</span>
					<span className="pt-1.5">
						{isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
					</span>
				</h3>
				{isOpen && <p className={"p-4 bg-white"}>{item.contents}</p>}
			</div>
		);
	});

	return <div className="w-96 rounded-md shadow border">{renderItems}</div>;
};

export default Accordion;
