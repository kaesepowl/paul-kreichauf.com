import { APP_UPDATE_PAGE, APP_UPDATE_SUB_PAGES } from "../actions/app";

const INITIAL_STATE = {
	page: "home",
	subPages: []
};

export const app = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case APP_UPDATE_PAGE:
			return {
				...state,
				page: action.page
			};
		case APP_UPDATE_SUB_PAGES:
			return {
				...state,
				subPages: action.subPages
			};
		default:
			return state;
	}
};
