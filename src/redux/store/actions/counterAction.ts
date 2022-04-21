import { ICounterAction } from "../types/counterTypes";
import * as actionTypes from "../actionTypes";

export const increment = () => {
    const action: ICounterAction = {
      type: actionTypes.INCREMENT,
    }
  
    return action;
}
  
export const decrement = () => {
    const action: ICounterAction = {
      type: actionTypes.DECREMENT,
    }
  
    return action;
}