import { useState } from "react";

const useSort = (data, config) => {
	const [sortOrder, setSortOrder] = useState(null);
	const [sortBy, setSortBy] = useState(null);

	const setSortColumn = (label) => {
		if (sortBy && label !== sortBy) {
			setSortBy(label);
			setSortOrder("asc");
			return;
		}

		if (sortOrder === null) {
			setSortOrder("asc");
			setSortBy(label);
		} else if (sortOrder === "asc") {
			setSortOrder("desc");
			setSortBy(label);
		} else if (sortOrder === "desc") {
			setSortOrder(null);
			setSortBy(null);
		}
	};

	// Only sort if sortOrder and sortBy are not null
	// find the exact column on which sorting will happen
	// then run sortValue func for sorting

	const sortedData = [...data];

	if (sortOrder && sortBy) {
		const { sortValue } = config.find((column) => column.label === sortBy);

		const reverseSort = sortOrder === "asc" ? 1 : -1;

		sortedData.sort((a, b) => {
			const valA = sortValue(a);
			const valB = sortValue(b);

			if (typeof valA === "string") {
				return valA.localeCompare(valB) * reverseSort;
			}

			return (valA - valB) * reverseSort;
		});
	}

	return {
		sortOrder,
		sortBy,
		sortedData,
		setSortColumn,
	};
};

export default useSort;
