import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NaviagationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener("popstate", handler);
  });

  const navigate = to => {
    window.history.pushState({},'', to);
    setCurrentPath(to);
  }

  return (
    <NavigationContext.Provider value={{navigate}}>
      <button onClick={()=>navigate("/")}>Home</button>
      {currentPath}
      {children}
    </NavigationContext.Provider>
  );
}

export { NaviagationProvider };
export default NavigationContext;
