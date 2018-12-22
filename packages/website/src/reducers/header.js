import { HEADER_MENU_ITEM_ADD } from "../actions/header";

const INITIAL_STATE = {
	items: [
		{
			caption: "Home",
			path: "/home"
		},
		{
			caption: "About",
			path: "/about"
		},
		{
			caption: "Resume",
			path: "/resume"
		},
		{
			caption: "Portfolio",
			path: "/portfolio"
		},
		{
			caption: "Blog",
			path: "/blog"
		},
		{
			caption: "Contact",
			path: "/contact"
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
