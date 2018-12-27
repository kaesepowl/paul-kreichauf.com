export const getPortfolioItems = state => state.portfolio.items;

export const getPortfolioItem = (id, state) =>
	getPortfolioItems(state).filter(item => item.id === id);
