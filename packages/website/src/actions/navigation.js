import { getNavigationOpen } from "../selectors/navigation";

export const NAVIGATION_SHOW = "NAVIGATION_SHOW";
export const NAVIGATION_HIDE = "NAVIGATION_HIDE";

export const showNavigation = () => {
	return {
		type: NAVIGATION_SHOW
	};
};

export const hideNavigation = () => {
	return {
		type: NAVIGATION_HIDE
	};
};

export const toggleNavigation = () => (dispatch, getState) => {
	const open = getNavigationOpen(getState());
	//
	if (open) {
		dispatch(hideNavigation());
	} else {
		dispatch(showNavigation());
	}
};
