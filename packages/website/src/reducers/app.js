import { APP_UPDATE_PAGE } from "../actions/app";

const INITIAL_STATE = {
	page: "home"
};

export const app = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case APP_UPDATE_PAGE:
			return {
				...state,
				page: action.page
			};
		default:
			return state;
	}
};
