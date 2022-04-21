import * as actionTypes from "../actionTypes";
import { ICounter, ICounterAction } from "../types/counterTypes";

const initialState:ICounter = {
  count: 0
};

const counterReducer =
    (
    state = initialState,
    action: ICounterAction
    ):ICounter => {
    
  switch (action.type) {      
    case actionTypes.INCREMENT:
          return { ...state, count: state.count + 1 };
      
    case actionTypes.DECREMENT:
          return { ...state, count: state.count - 1 };
      
    default:
      return state;
  }
};

export default counterReducer;