import * as actionTypes from "../actionTypes";
import { IUser, ISetAction } from "../types/userTypes";

const initialState: IUser = {
    id: 0,
    firstName: "",
    lastName: ""
};

const userReducer =
    (
    state = initialState,
    action: ISetAction
    ):IUser => {
    
  switch (action.type) { 
      
    case actionTypes.SET_USER:
        return { ...state, id:action.user.id,firstName:action.user?.firstName,lastName:action.user?.lastName};
      
    default:
      return state;
  }
};

export default userReducer;