import React, { useContext } from "react";
import NavigationContext from "../context/Navigation";

function Routes({ children, path }) {
  const { currentPath } = useContext(NavigationContext);
  if (path === currentPath) return children;
  return null;
}

export default Routes;
