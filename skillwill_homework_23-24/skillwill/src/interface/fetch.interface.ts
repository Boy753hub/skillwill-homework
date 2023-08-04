
export interface ifetch{
    response: any, 
    error: Error | null, 
    loading:boolean | null, 
    resendRequest: ()=> void 
}

export interface iusefetch {
    url: string,
    method: string
}
