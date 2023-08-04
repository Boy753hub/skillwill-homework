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
    eng?: dataLang,
    geo?: dataLang
}

export interface ContextValue {
    isOpen: string | number | readonly string[] | undefined | boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
    data: idata; 
    changeLan?: string; 
    setLan?: (i:string)=> {};
  }
  
  export interface iheaderContext {
    isOpen?: any;
    toggle: Dispatch<SetStateAction<boolean>>;
    setLan?: (i:string)=> {};
    changeLan?: any; 
    data: any; 
  }


