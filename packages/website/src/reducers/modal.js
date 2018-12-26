import { MODAL_SHOW, MODAL_UPDATE_ID, MODAL_HIDE } from "../actions/modal";

const INITIAL_STATE = {
	open: false,
	id: null
};

export const modal = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MODAL_SHOW:
			return {
				...state,
				open: true
			};
		case MODAL_HIDE:
			return {
				...state,
				open: false
			};
		case MODAL_UPDATE_ID:
			return {
				...state,
				id: action.id
			};
	}
	return state;
};
