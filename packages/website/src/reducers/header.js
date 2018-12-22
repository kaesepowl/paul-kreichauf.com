import { HEADER_MENU_ITEM_ADD } from "../actions/header";

const INITIAL_STATE = {
	items: [
		{
			caption: "Home"
		},
		{
			caption: "About"
		},
		{
			caption: "Resume"
		},
		{
			caption: "Portfolio"
		},
		{
			caption: "Blog"
		},
		{
			caption: "Contact"
		}
	]
};

export const header = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case HEADER_MENU_ITEM_ADD:
			return {
				...state,
				test: !state.test
			};
		default:
			return state;
	}
};
