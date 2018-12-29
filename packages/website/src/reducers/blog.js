import { BLOG_UPDATE_ITEMS } from "../actions/blog";

const INITIAL_STATE = {
	items: []
};

export const blog = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BLOG_UPDATE_ITEMS:
			return {
				...state,
				items: action.items
			};
	}
	return state;
};
