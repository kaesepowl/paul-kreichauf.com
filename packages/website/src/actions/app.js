import { hideNavigation } from "./navigation.js";
import {
	getAppPage,
	getAppSubPages,
	getAppLoadedPages
} from "../selectors/app.js";

export const APP_UPDATE_PAGE = "APP_UPDATE_PAGE";
export const APP_UPDATE_SUB_PAGES = "APP_UPDATE_SUB_PAGES";
export const APP_ADD_LOADED_PAGE = "APP_ADD_LOADED_PAGE";

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

export const navigate = path => async (dispatch, getState) => {
	const page = getPageByPath(path);
	//
	const subPages = getSubPagesByPath(path);
	//
	if (getAppPage(getState()) !== page) {
		//
		await dispatch(loadPage(page));
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
	}
};

const loadPage = page => async (dispatch, getState) => {
	if (getAppLoadedPages(getState()).includes(page) === false) {
		switch (page) {
			case "about":
				await import("../components/pk-page-about/pk-page-about.js");
				break;
			case "resume":
				await import("../components/pk-page-resume/pk-page-resume.js");
				break;
			case "portfolio":
				await import("../components/pk-page-portfolio/pk-page-portfolio.js");
				break;
			case "blog":
				await import("../components/pk-page-blog/pk-page-blog.js");
				break;
			case "contact":
				await import("../components/pk-page-contact/pk-page-contact.js");
				break;
			default:
			// page = "view404";
			// import("../components/my-view404.js");
		}
		dispatch(addLoadedPage(page));
	}
	dispatch(updatePage(page));
};

export const addLoadedPage = page => (dispatch, getState) => {
	if (getAppLoadedPages(getState()).includes(page) === false) {
		dispatch({
			type: APP_ADD_LOADED_PAGE,
			page
		});
	}
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
