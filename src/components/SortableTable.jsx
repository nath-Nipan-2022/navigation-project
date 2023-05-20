/* eslint-disable react/react-in-jsx-scope */
import Table from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";
import useSort from "../hooks/use-sort";

const SortableTable = (props) => {
	const { data, config } = props;
	const { sortOrder, sortBy, setSortColumn, sortedData } = useSort(
		data,
		config
	);

	// if we have sortValue func then update config
	const updatedConfig = config.map((column) => {
		if (column.sortValue) {
			return {
				...column,
				header: () => (
					<th
						onClick={() => setSortColumn(column.label)}
						className='cursor-pointer hover:bg-slate-100'
					>
						<div className='p-1 flex items-center'>
							{getIcons(column.label, sortBy, sortOrder)}
							{column.label}
						</div>
					</th>
				),
			};
		}
		return column;
	});

	return <Table {...props} config={updatedConfig} data={sortedData} />;
};

function getIcons(label, sortBy, sortOrder) {
	//only change icon when it is clicked.
	if (label !== sortBy) {
		return (
			<div>
				<GoArrowSmallUp />
				<GoArrowSmallDown />
			</div>
		);
	}
	if (sortOrder === "null") {
		return (
			<div>
				<GoArrowSmallUp />
				<GoArrowSmallDown />
			</div>
		);
	}

	if (sortOrder == "asc") {
		return <GoArrowSmallUp />;
	} else if (sortOrder == "desc") {
		return <GoArrowSmallDown />;
	}
}
export default SortableTable;
