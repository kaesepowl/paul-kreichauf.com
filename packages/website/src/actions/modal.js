import { getModalId } from "../selectors/modal";

export const MODAL_SHOW = "MODAL_SHOW";
export const MODAL_HIDE = "MODAL_HIDE";
export const MODAL_LOAD = "MODAL_LOAD";
export const MODAL_UPDATE_ID = "MODAL_UPDATE_ID";

export const modalLoad = ({ id, type }) => async (dispatch, getState) => {
	const currentId = getModalId(getState());
	//
	if (currentId !== type) {
		try {
			await import(`../components/pk-modal-${type}/pk-modal-${type}.js`);
			//
			dispatch(modalUpdateId(id));
			//
			dispatch(modalShow());
		} catch (e) {
			console.error(e);
		}
	}
};

export const modalUnload = () => (dispatch, getState) => {
	const currentId = getModalId(getState());
	//
	if (currentId !== null) {
		//
		dispatch(modalUpdateId(null));
		//
		dispatch(modalHide());
	}
};

export const modalUpdateId = id => {
	return {
		type: MODAL_UPDATE_ID,
		id
	};
};

export const modalShow = () => {
	return {
		type: MODAL_SHOW
	};
};

export const modalHide = () => {
	return {
		type: MODAL_HIDE
	};
};
