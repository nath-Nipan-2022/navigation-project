import { useState } from "react";
import Table from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
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

  // if we have sortValue func then update config
  const updatedConfig = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column,
        header: () => (
          <th
            onClick={() => handleClick(column.label)}
            className="cursor-pointer hover:bg-slate-100"
          >
            <div className="p-1 flex items-center">
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
