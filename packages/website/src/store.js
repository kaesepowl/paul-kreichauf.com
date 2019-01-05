import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
//
import "./actions/blog";
//
import { app } from "./reducers/app";
import { blog } from "./reducers/blog";
import { forms } from "./reducers/forms";
import { i18n } from "./reducers/i18n";
import { modal } from "./reducers/modal";
import { navigation } from "./reducers/navigation";
import { portfolio } from "./reducers/portfolio";
//
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
export const store = createStore(
	combineReducers({ app, blog, forms, i18n, modal, navigation, portfolio }),
	devCompose(applyMiddleware(thunk))
);
//
