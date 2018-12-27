import { hideNavigation } from "./navigation.js";
import { getAppPage, getAppSubPages } from "../selectors/app.js";
import { modalLoadById, modalHide, modalUnload } from "./modal.js";

export const APP_UPDATE_PAGE = "APP_UPDATE_PAGE";
export const APP_UPDATE_SUB_PAGES = "APP_UPDATE_SUB_PAGES";

const DEFAULT_PAGE = "home";

const splitPath = path => {
	if (path === "/") {
		return [DEFAULT_PAGE];
	}
	// slice first slash
	if (path[0] === "/") {
		path = path.slice(1);
	}
	// split by slash
	return path.split("/");
};

const getPageByPath = path => {
	const pathParts = splitPath(path);
	// return first part of path -> page
	return pathParts[0];
};

const getSubPagesByPath = path => {
	const pathParts = splitPath(path);
	//
	if (pathParts.length <= 1) {
		return [];
	}
	// return first part of path -> page
	return pathParts.slice(1);
};

export const navigate = path => (dispatch, getState) => {
	const page = getPageByPath(path);
	//
	const subPages = getSubPagesByPath(path);
	//
	if (getAppPage(getState()) !== page) {
		//
		dispatch(loadPage(page));
	}
	//
	dispatch(hideNavigation());
	//
	if (
		getAppSubPages(getState())
			.sort()
			.toString() !== subPages.sort().toString()
	) {
		//
		dispatch(updateSubPages(subPages));
		//
		const [modalId] = subPages.filter(
			subPage => subPage.indexOf("modal-") === 0
		);
		if (modalId) {
			//
			dispatch(modalLoadById(modalId.replace("modal-", "")));
		} else {
			//
			dispatch(modalUnload());
		}
	}
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

export const updatePage = page => {
	return {
		type: APP_UPDATE_PAGE,
		page
	};
};

export const updateSubPages = subPages => {
	return {
		type: APP_UPDATE_SUB_PAGES,
		subPages
	};
};
