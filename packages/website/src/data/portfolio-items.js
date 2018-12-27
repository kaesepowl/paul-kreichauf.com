export const PORTFOLIO_TAG_CODING = "coding";
export const PORTFOLIO_TAG_MIXES_AUDIO = "mixes-audio";
export const PORTFOLIO_TAG_MIXES_VIDEO = "mixes-video";

export const getPortfolioItems = () => {
	return [
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
};

export const getPortfolioItemById = id =>
	getPortfolioItems().filter(item => item.id === id);
