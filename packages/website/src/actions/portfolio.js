export const PORTFOLIO_UPDATE_ITEMS = "PORTFOLIO_UPDATE_ITEMS";
export const PORTFOLIO_TAG_CODING = "coding";
export const PORTFOLIO_TAG_MIXES_AUDIO = "mixes-audio";
export const PORTFOLIO_TAG_MIXES_VIDEO = "mixes-video";

const getItems = filter => {
	const items = [
		{
			id: "imperion",
			tag: PORTFOLIO_TAG_CODING,
			img: "/src/assets/images/portfolio/coding/imperion.jpg",
			title: "Imperion",
			subTitle: "Travian Games GmbH"
		},
		{
			id: "screener",
			tag: PORTFOLIO_TAG_CODING,
			img: "/src/assets/images/portfolio/coding/screener.jpg",
			title: "Screener",
			subTitle: "financial.com"
		},
		{
			id: "charting",
			tag: PORTFOLIO_TAG_CODING,
			img: "/src/assets/images/portfolio/coding/charting.jpg",
			title: "Interactive Charting",
			subTitle: "financial.com"
		},
		{
			id: "tonic",
			tag: PORTFOLIO_TAG_CODING,
			img: "/src/assets/images/portfolio/coding/tonic.jpg",
			title: "Tonic.",
			subTitle: "Team Internet AG"
		},
		{
			id: "tipp-game",
			tag: PORTFOLIO_TAG_CODING,
			img: "/src/assets/images/portfolio/coding/tipp-game.jpg",
			title: "Tipp Game",
			subTitle: "Freelance"
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
