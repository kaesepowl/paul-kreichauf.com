import { hideNavigation } from "./navigation.js";

export const APP_UPDATE_PAGE = "APP_UPDATE_PAGE";

export const navigate = path => dispatch => {
	const page = path === "/" ? "home" : path.slice(1);
	//
	dispatch(loadPage(page));
	//
	dispatch(hideNavigation());
};

const loadPage = page => dispatch => {
	switch (page) {
		case "about":
			import("../components/pk-page-about/pk-page-about.js");
			break;
		case "resume":
			import("../components/pk-page-resume/pk-page-resume.js");
			break;
		case "portfolio":
			import("../components/pk-page-portfolio/pk-page-portfolio.js");
			break;
		default:
		// page = "view404";
		// import("../components/my-view404.js");
	}

	dispatch(updatePage(page));
};

const updatePage = page => {
	return {
		type: APP_UPDATE_PAGE,
		page
	};
};
