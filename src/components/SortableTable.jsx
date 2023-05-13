import { useState } from "react";
import Table from "./Table";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
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

  // if we have sortValue func then update config
  const updatedConfig = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column,
        header: () => (
          <th
            onClick={() => handleClick(column.label)}
            className="p-4 cursor-pointer"
          >
            {column.label}
          </th>
        ),
      };
    }
    return column;
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
};

export default SortableTable;
