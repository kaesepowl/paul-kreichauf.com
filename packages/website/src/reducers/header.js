import { HEADER_MENU_ITEM_ADD } from "../actions/header";

const INITIAL_STATE = {
	items: [
		{
			caption: "Home",
			page: "home",
			icon: "home"
		},
		{
			caption: "About",
			page: "about",
			icon: "user"
		},
		{
			caption: "Resume",
			page: "resume",
			icon: "file-text"
		},
		{
			caption: "Portfolio",
			page: "portfolio",
			icon: "briefcase"
		},
		{
			caption: "Blog",
			page: "blog",
			icon: "newspaper-o"
		},
		{
			caption: "Contact",
			page: "contact",
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
