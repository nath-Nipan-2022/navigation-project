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
        // className="p-4 cursor-pointer"
      >
        {column.label}
      </th>
    );
  });

  const renderRows = data.map((row, i) => {
    const oddRowClass = i % 2 !== 0 ? "bg-fuchsia-100" : "";

    // Awesome method!
    const renderCells = config.map((column) => {
      return (
        <td key={column.label} className=" p-2 px-3">
          {column.render(row)}
        </td>
      );
    });

    return (
      <tr key={row.id} className={`p-2 border-b border-white ${oddRowClass}`}>
        {renderCells}
      </tr>
    );
  });

  return (
    <table className="mx-auto table-auto border border-white w-96">
      <thead>
        <tr className="text-left border-b-2 border-white bg-slate-200">
          {renderHeaders}
        </tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default Table;
