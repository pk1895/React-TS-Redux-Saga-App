import { combineReducers,createStore, applyMiddleware } from "redux";
import counterReducer from "./store/reducers/counterReducer";
import userReducer from "./store/reducers/userReducer";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./saga/rootSaga";

const reducer = combineReducers({
    counterReducer,
    userReducer
})

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export type RootState = ReturnType<typeof reducer>

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);
export default store;