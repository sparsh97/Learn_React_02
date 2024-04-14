import React, { Fragment } from "react";
import PropTypes from "prop-types";
function Table({ data, config, keyFn }) {
  const tBodyRow = data.map((item) => {
    const renderCells = config.map(column => {
      return <td className="p-2" key={column.label}>{column.render(item)}</td>
    });
    return (
      <tr key={keyFn(item)} className="border-b">
        {renderCells}
      </tr>
    );
  });

  const tHeadRow = config.map(column => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return (
      <th key={column.label}>{column.label}</th>
    )
  })
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {tHeadRow}
        </tr>
      </thead>
      <tbody>{tBodyRow}</tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  config: PropTypes.array.isRequired,
  keyFn: PropTypes.func.isRequired
};
export default Table;
