export interface itodo {
    id: number,
    desc: string, 
    names: string,
    lastname: string,
    date: number, 
    isCompleted: boolean, 
    resendRequest?: () => void
}

export interface ioptions extends Intl.DateTimeFormatOptions {
    timeZone:string
}

export interface icontext{
    loading: boolean,
    error: Error | undefined | null,
    resendRequest: ()=>void,
    list: any
}

export interface iuser{
    name: string,
    lastname: string,
    _uuid: number,
    desc: string,
    isCompleted: boolean,
    _created: number
}
export interface iList{
    name: string,
    lastname: string,
    id: number,
    desc: string,
    isCompleted: boolean,
    date: number,
    resendRequest?: ()=> void
}

