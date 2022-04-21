import { takeLatest } from "redux-saga/effects";
import {handleGetUser } from "./handlers/user";
import * as actionTypes from "../store/actionTypes";

export function* watcherSaga() {
    yield takeLatest(actionTypes.GET_USER, handleGetUser);
}