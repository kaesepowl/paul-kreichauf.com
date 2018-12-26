import { MODAL_SHOW } from "../actions/modal";

const INITIAL_STATE = {
	open: false
};

export const portfolio = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MODAL_SHOW:
			return {
				...state,
				open: true
			};
	}
	return state;
};
