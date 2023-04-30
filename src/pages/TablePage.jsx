import Table from "../components/Table";

const TablePage = () => {
  const data = [
    { header1: "Fruits", header2: "Color", header3: "No.of Items" },
    { name: "lorem", value: "ipsum", type: "random" },
    { name: "ipsum", value: "dolor", type: "okay" },
    { name: "dolor", value: "picsum", type: "good" },
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default TablePage;
