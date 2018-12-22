import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
//
import { header } from "./reducers/header";
//
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
export const store = createStore(
	combineReducers({ header }),
	devCompose(applyMiddleware(thunk))
);
