import React from "react";
import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warn,
  danger,
  rounded,
  outline,
}) {
  return (
    <>
      <div className="p-2 m-2">
        <button>{children}</button>
      </div>
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  checkVariation: ({ primary, secondary, success, warn, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warn) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1) return new Error("Only one button variation can be true");
  },
};

export default Button;
