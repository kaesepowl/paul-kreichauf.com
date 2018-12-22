import { HEADER_MENU_ITEM_ADD } from "../actions/header";

const INITIAL_STATE = {
	items: [
		{
			caption: "Home",
			path: "/home",
			icon: "home"
		},
		{
			caption: "About",
			path: "/about",
			icon: "user"
		},
		{
			caption: "Resume",
			path: "/resume",
			icon: "file-text"
		},
		{
			caption: "Portfolio",
			path: "/portfolio",
			icon: "briefcase"
		},
		{
			caption: "Blog",
			path: "/blog",
			icon: "newspaper-o"
		},
		{
			caption: "Contact",
			path: "/contact",
			icon: "envelope"
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
