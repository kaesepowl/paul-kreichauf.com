export const PORTFOLIO_TAG_CODING = "coding";
export const PORTFOLIO_TAG_MIXES_AUDIO = "mixes-audio";
export const PORTFOLIO_TAG_MIXES_VIDEO = "mixes-video";

export const BLOG_TAG_CODING = "blog-coding";

export const getModalItems = () => {
	return [
		{
			id: "portfolio-imperion",
			type: "portfolio-imperion",
			tag: PORTFOLIO_TAG_CODING,
			img: "/src/assets/images/portfolio/coding/imperion",
			title: "Imperion",
			subTitle: "Travian Games GmbH"
		},
		{
			id: "portfolio-screener",
			type: "portfolio-screener",
			tag: PORTFOLIO_TAG_CODING,
			img: "/src/assets/images/portfolio/coding/screener",
			title: "Screener",
			subTitle: "financial.com"
		},
		{
			id: "portfolio-charting",
			type: "portfolio-charting",
			tag: PORTFOLIO_TAG_CODING,
			img: "/src/assets/images/portfolio/coding/charting",
			title: "Interactive Charting",
			subTitle: "financial.com"
		},
		{
			id: "portfolio-tonic",
			type: "portfolio-tonic",
			tag: PORTFOLIO_TAG_CODING,
			img: "/src/assets/images/portfolio/coding/tonic",
			title: "Tonic.",
			subTitle: "Team Internet AG"
		},
		{
			id: "portfolio-tipp-game",
			type: "portfolio-tipp-game",
			tag: PORTFOLIO_TAG_CODING,
			img: "/src/assets/images/portfolio/coding/tipp-game",
			title: "Tipp Game",
			subTitle: "Freelance"
		},
		{
			id: "mix-video-1",
			type: "video-youtube",
			tag: PORTFOLIO_TAG_MIXES_VIDEO,
			img: "https://img.youtube.com/vi/CLj4AHyy7ps/hqdefault.jpg",
			title: "3 Hours Deep House",
			subTitle: "2013",
			youtubeId: "CLj4AHyy7ps"
		},
		{
			id: "mix-video-2",
			type: "video-youtube",
			tag: PORTFOLIO_TAG_MIXES_VIDEO,
			img: "https://img.youtube.com/vi/oZa7G9nltl4/hqdefault.jpg",
			title: "Deep House Vinyl Mix PII",
			subTitle: "2013",
			youtubeId: "oZa7G9nltl4"
		},
		{
			id: "mix-video-3",
			type: "video-youtube",
			tag: PORTFOLIO_TAG_MIXES_VIDEO,
			img: "https://img.youtube.com/vi/oHzkRLVXr7Y/hqdefault.jpg",
			title: "Kaesebude Podcast #2",
			subTitle: "2017",
			youtubeId: "oHzkRLVXr7Y"
		},
		{
			id: "mix-audio-1",
			type: "audio-soundcloud",
			tag: PORTFOLIO_TAG_MIXES_AUDIO,
			img:
				"https://i1.sndcdn.com/artworks-000352276428-pcp5kf-t500x500.jpg",
			title: "Melodic House Set",
			subTitle: "2018",
			soundcloudId: "448635003"
		},
		{
			id: "blog-1",
			type: "blog",
			tag: BLOG_TAG_CODING,
			img:
				"https://i1.sndcdn.com/artworks-000352276428-pcp5kf-t500x500.jpg",
			title: "First Blog",
			subTitle: "29-12-2018",
			md: "first.md"
		}
	];
};

export const getModalItemById = id => {
	const [res = null] = getModalItems().filter(item => item.id === id);
	return res;
};
