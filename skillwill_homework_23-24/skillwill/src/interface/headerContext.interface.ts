import { Dispatch, SetStateAction } from "react";

interface dataLang{
    create: string,
    Add: string,
    edit: string,
    finish: string,
    delete: string,
    title: string,
    theme: string,
    name: string,
    lastname: string,
    task: string,
}

export interface idata {
    eng: dataLang,
    geo: dataLang
}

export interface ContextValue {
    isOpen: boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
    data: idata; 
    changeLan: string; 
    setLan: Dispatch<SetStateAction<string>>;
  }
  
  export interface iheaderContext {
    isOpen: boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
    setLan: Dispatch<SetStateAction<string>>;
    changeLan: string; 
    data: idata; 
  }