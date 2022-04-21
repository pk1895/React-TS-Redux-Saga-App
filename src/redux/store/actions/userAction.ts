import * as actionTypes from "../actionTypes";
import { IUser, IGetAction, ISetAction } from "../types/userTypes";

export const getUser = () => {
    const action: IGetAction = {
        type: actionTypes.GET_USER,
    }
  
    return action;
}
  
export const setUser = (user:IUser) => {
    const action: ISetAction = {
        type: actionTypes.SET_USER,
        user:user
    }
  
    return action;
}