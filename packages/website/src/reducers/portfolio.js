import { PORTFOLIO_UPDATE_ITEMS } from "../actions/portfolio";

const INITIAL_STATE = {
	items: []
};

export const portfolio = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PORTFOLIO_UPDATE_ITEMS:
			return {
				...state,
				items: action.items
			};
	}
	return state;
};
