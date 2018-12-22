import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
//
import { header } from "./reducers/header";
import { app } from "./reducers/app";
import { navigation } from "./reducers/navigation";
//
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
export const store = createStore(
	combineReducers({ header, app, navigation }),
	devCompose(applyMiddleware(thunk))
);
//
