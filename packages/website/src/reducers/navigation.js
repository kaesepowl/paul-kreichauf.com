import { NAVIGATION_SHOW, NAVIGATION_HIDE } from "../actions/navigation";

const INITIAL_STATE = {
	open: false
};

export const navigation = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NAVIGATION_SHOW:
			return {
				...state,
				open: true
			};
		case NAVIGATION_HIDE:
			return {
				...state,
				open: false
			};
		default:
			return state;
	}
};
