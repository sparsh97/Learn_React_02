import React from "react";
import PropTypes from "prop-types";

function Button({children}) {
  return (
    <>
      <div className="p-2 m-2">
        <button>{children}</button>
      </div>
    </>
  );
}

Button.propTypes = {
    children: PropTypes.node.isRequired
}

export default Button;
