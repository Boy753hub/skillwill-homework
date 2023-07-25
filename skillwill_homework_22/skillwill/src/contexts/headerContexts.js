import { useContext, useMemo, createContext, useCallback, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const HeaderContexts = createContext(null);

const HeaderContextProvider = ({ children }) => {
  const [isOpen = true, toggle] = useLocalStorage("tab", true);
  const [changeLan, setLan] = useLocalStorage('lang', 'eng');
 

  const contextValue = useMemo(() => ({
    isOpen,
    toggle,
    changeLan,
    setLan
  }), [isOpen, toggle, changeLan, setLan]);

  return (
    <HeaderContexts.Provider value={contextValue}>
      {children}
    </HeaderContexts.Provider>
  );
};

export const useHeaderContext = () => {
  const contextValue = useContext(HeaderContexts);
  if (!contextValue) throw new Error('Your component is not inside of HeaderContextProvider');

  return contextValue;
};

export default HeaderContextProvider;
