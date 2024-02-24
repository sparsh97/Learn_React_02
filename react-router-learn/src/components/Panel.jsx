import classNames from "classnames";
import PropTypes from 'prop-types';
export default function Panel({ children, className, ...rest }) {
  const finalClassnames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={finalClassnames}>
      {children}
    </div>
  );
}

Panel.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
}
