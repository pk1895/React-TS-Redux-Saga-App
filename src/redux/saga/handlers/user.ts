import { call, put } from "redux-saga/effects";
import { setUser } from "../../store/actions/userAction";
import { IUser, IGetAction } from "../../store/types/userTypes";
import { requestGetUser } from "../requests/user";

export function* handleGetUser(action: IGetAction): any{
    try {
        
        const response = yield call(requestGetUser);
        const { data } = response;
        yield put(setUser(data));

    } catch (error) {
        console.log(error);
    }
}