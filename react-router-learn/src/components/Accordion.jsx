import React, { useState } from "react";
import PropTypes from "prop-types";

function Accordion({ items }) {
  const [expandIndex, setExpandIndex] = useState(0);

  const renderItem = items.map((item, index) => {
    const isExpanded = index == expandIndex;
    return (
      <div className="rounded-md m-1 p-1" key={item.index}>
        <div
          onClick={() => setExpandIndex(item.index)}
          className="p-1 font-bold border border-black border-spacing-1"
        >
          {item.label}
        </div>
        <div className="p-1 m-1 text-pretty">
          {isExpanded && <div>{item.content}</div>}
        </div>
      </div>
    );
  });
  return <div className="m-2 p-2 text-center">{renderItem}</div>;
}

Accordion.propTypes = {
  items: PropTypes.array,
};

export default Accordion;
