import { Fragment } from "react";

const Table = ({ data, config }) => {
	const renderHeaders = config.map((column) => {
		if (column.header) {
						return <Fragment key={column.label}>{column.header()}</Fragment>;
		}

		return (
			<th
				// onClick={() => handleHeaderClick(column.label)}
				//! here, we are declaring onclick for event header, which is inefficient!

				key={column.label}
				className="p-4"
			>
				{column.label}
			</th>
		);
	});

	const renderRows = data.map((row, i) => {
		const oddRowClass = i % 2 !== 0 ? "bg-fuchsia-100" : "bg-fuchsia-200";

		// Awesome method!
		const renderCells = config.map((column) => {
			return (
				<td key={column.label} className="px-4 py-3">
					{column.render(row)}
				</td>
			);
		});

		return (
			<tr key={row.id} className={`px-4 border-b border-white ${oddRowClass}`}>
				{renderCells}
			</tr>
		);
	});

	return (
		<table className="table-auto border">
			<thead>
				<tr className="text-left  bg-[#f7f7f7]">{renderHeaders}</tr>
			</thead>
			<tbody>{renderRows}</tbody>
		</table>
	);
};

export default Table;
