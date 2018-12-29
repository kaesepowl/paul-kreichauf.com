export const getBlogItems = state => state.blog.items;

export const getBlogItem = (id, state) =>
	getBlogItems(state).filter(item => item.id === id);
