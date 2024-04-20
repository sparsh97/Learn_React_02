import React from "react";
import Table from "./Table";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import useSort from "../hooks/useSort";
import PropTypes from 'prop-types'
function SortableTable(props) {
  const { config, data } = props;
  const {handleClick, sortBy, sortOrder, sortedData} = useSort(data, config);
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-200"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    );
  }
  if (sortOrder === "asc") {
    return (
      <div>
        <GoTriangleUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoTriangleDown />
      </div>
    );
  } else {
    return (
      <div>
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    );
  }
}
SortableTable.propTypes = {
  data: PropTypes.any.isRequired,
  config: PropTypes.any.isRequired
}
export default SortableTable;
