import { createContext, useState } from "react";

const NavigationContext = createContext();

function NaviagationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  return (
    <NavigationContext.Provider value={{}}>
      {currentPath}
      {children}
    </NavigationContext.Provider>
  );
}

export { NaviagationProvider };
export default NavigationContext;
