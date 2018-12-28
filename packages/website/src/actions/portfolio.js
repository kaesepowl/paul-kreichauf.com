import { getModalItems } from "../data/modal-items";

export const PORTFOLIO_UPDATE_ITEMS = "PORTFOLIO_UPDATE_ITEMS";

const getItems = filter => {
	const items = getModalItems();
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
