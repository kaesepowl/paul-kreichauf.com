import { getPortfolioItems } from "../data/portfolio-items";

export const PORTFOLIO_UPDATE_ITEMS = "PORTFOLIO_UPDATE_ITEMS";

const getItems = filter => {
	const items = getPortfolioItems();
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
