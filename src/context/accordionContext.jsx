import { React, useState, createContext } from "react";
const AccordionContext = createContext();

function AccordionContextProvider({ children }) {
	const [expandedIndex, setExpandedIndex] = useState(null);

	const handleAccChange = ({ index }) => {
		setExpandedIndex((prevInx) => {
			if (prevInx === index) return null;
			return index;
		});
	};

	const valuesToShare = { expandedIndex, handleAccChange };

	return (
		<AccordionContext.Provider value={valuesToShare}>
			{children}
		</AccordionContext.Provider>
	);
}

export { AccordionContextProvider };
export default AccordionContext;
