const Table = ({ data }) => {
  const renderHeaders = Object.values(data[0]).map((header, i) => {
    return (
      <th
        className=" border-b-2 border-slate-400 p-2 hover:bg-red-400  "
        key={i}
      >
        {header}
      </th>
    );
  });

  const renderRows = data.map((row) => {
    if (!row.name) {
      return "";
    }
    return (
      <tr key={row.name} className=" text-center text-gray-800">
        <td className="p-2 hover:bg-red-300  border-b border-slate-400">
          {row.name}
        </td>
        <td className="p-2 hover:bg-red-300  border-b border-slate-400">
          {row.value}
        </td>
        <td className="p-2 hover:bg-red-300  border-b border-slate-400">
          {row.type}
        </td>
      </tr>
    );
  });

  return (
    <table className="mx-auto table-auto w-72 bg-red-100 border-2 border-slate-500  cursor-pointer">
      <thead>
        <tr>{renderHeaders}</tr>
      </thead>

      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default Table;
