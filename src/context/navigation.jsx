import { createContext, useState, useEffect } from "react";
const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // handle navigation of <- & -> button
    const handler = () => {
      setCurrentPath(window.location.pathname);
      console.log('Iam at', window.location.pathname);
    };
    window.addEventListener("popstate", handler);
    // remember: popstate is for tracking forward or backward navigation.

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    // update the address bar, so that it doesn't refresh the page
    // push the new pathname to the history object
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
