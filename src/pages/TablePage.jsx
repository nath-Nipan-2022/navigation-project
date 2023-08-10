import SortableTable from "../components/SortableTable";

const TablePage = () => {
  const data = [
    { id: 1, name: "Alice", age: 28, city: "New York", color: "bg-red-300" },
    { id: 2, name: "Jack", age: 35, city: "Los Angeles", color: "bg-blue-300" },
    { id: 3, name: "Charlie", age: 42, city: "Chicago", color: "bg-zinc-300" },
    { id: 4, name: "Rock", age: 19, city: "Houston", color: "bg-green-300" },
    { id: 5, name: "Emily", age: 56, city: "Washington", color: "bg-pink-300" },
  ];

  // fantastic!
  // every header has separate method
  const config = [
    {
      label: "Name",
      render: (row) => row.name,
      sortValue: (row) => row.name, // render & sortValue methods are different.
    },
    {
      label: "Age",
      render: (row) => row.age,
      sortValue: (row) => row.age,
    },
    {
      label: "City",
      render: (row) => row.city,
      sortValue: (row) => row.city,
    },
    {
      label: "Color",
      render: (row) => <div className={"p-2 " + row.color}>{row.color}</div>,
    },
  ];

  return (
		<div className="p-5">
			<h2 className="text-lg text-slate-600 p-4 font-semibold ">Sortable Table Page</h2>
			<SortableTable data={data} config={config} />
		</div>
	);
};

export default TablePage;
