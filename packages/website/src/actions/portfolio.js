import { getModalItems, BLOG_TAG_CODING } from "../data/modal-items";

export const PORTFOLIO_UPDATE_ITEMS = "PORTFOLIO_UPDATE_ITEMS";

const getItems = filter => {
	const items = getModalItems().filter(({ tag }) => tag !== BLOG_TAG_CODING);
	//
	if (!filter) {
		return items;
	}
	//
	return items.filter(({ tag }) => tag === filter);
};

export const updateItems = filter => {
	return {
		type: PORTFOLIO_UPDATE_ITEMS,
		items: getItems(filter)
	};
};
