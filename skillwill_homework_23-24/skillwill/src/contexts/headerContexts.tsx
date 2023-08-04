import { useContext, useMemo, createContext, ReactNode, Dispatch, SetStateAction } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import { ContextValue, idata , iheaderContext} from "../interface/headerContext.interface";


const HeaderContexts = createContext<Partial<iheaderContext>>({});


const HeaderContextProvider:React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen = true, toggle] = useLocalStorage("tab", true);
  const [changeLan, setLan] = useLocalStorage('lang', 'eng');
  const data: idata  = {
    eng: {
      create: 'Create',
      Add: 'Add',
      edit: 'Edit',
      finish: 'Finish',
      delete: 'Delete',
      title: 'To do',
      theme: 'Theme',
      name: 'name',
      lastname: 'lastname',
      task: 'task',
    },
    geo: {
      create: 'შექმენი',
      Add: 'დამატება',
      edit: 'შეცვლა',
      finish: 'დასრულება',
      delete: 'წაშლა',
      title: 'გასაკეთებელი საქმე',
      theme: 'ფონი',
      name: 'სახელი',
      lastname: 'გვარი',
      task: 'საქმე',
    },
  };


  const contextValue = useMemo<ContextValue>(() => ({
    isOpen,
    toggle,
    data,
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
