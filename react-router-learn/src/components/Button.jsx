import React from "react";
import PropTypes from "prop-types";
import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  warn,
  danger,
  rounded,
  outline,
  ...rest
}) {
  const finalClassName = twMerge(
    className("px-3", "py-1.5 border", {
      "bg-blue-500 border-blue-500 text-white": primary,
      "bg-gray-500 border-gray-500 text-white": secondary,
      "bg-orange-500 border-orange-500 text-white": warn,
      "bg-red-500 border-red-500 text-white": danger,
      "bg-green-500 border-green-500 text-white": success,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-red-500": outline && danger,
      "text-green-500": outline && warn,
      "text-ornage-500": outline && success
    })
  );
  return (
    <>
      <div>
        <button {...rest} className={finalClassName}>{children}</button>
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
