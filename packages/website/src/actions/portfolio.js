export const PORTFOLIO_UPDATE_ITEMS = "PORTFOLIO_UPDATE_ITEMS";
export const PORTFOLIO_TAG_CODING = "coding";
export const PORTFOLIO_TAG_MIXES_AUDIO = "mixes-audio";
export const PORTFOLIO_TAG_MIXES_VIDEO = "mixes-video";

const getItems = filter => {
	const items = [
		{
			tag: PORTFOLIO_TAG_CODING,
			img: "/src/assets/images/portfolio/coding/imperion.jpg",
			title: "Imperion",
			subTitle: "Travian Games GmbH"
		},
		{
			tag: PORTFOLIO_TAG_CODING,
			img: "/src/assets/images/portfolio/coding/imperion.jpg",
			title: "Imperion",
			subTitle: "Travian Games GmbH"
		},
		{
			tag: PORTFOLIO_TAG_CODING,
			img: "/src/assets/images/portfolio/coding/imperion.jpg",
			title: "Imperion",
			subTitle: "Travian Games GmbH"
		}
	];
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
