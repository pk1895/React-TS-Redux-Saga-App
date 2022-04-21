export interface IUser{
    id: number,
    firstName: string,
    lastName:string
}

export interface IGetAction{
    type: string
}

export interface ISetAction{
    type: string
    user:IUser
}
