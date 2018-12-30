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
			switch (type) {
				case "portfolio-imperion":
					await import("../components/pk-modal-portfolio-imperion/pk-modal-portfolio-imperion.js");
					break;
				case "portfolio-screener":
					await import("../components/pk-modal-portfolio-screener/pk-modal-portfolio-screener.js");
					break;
				case "portfolio-charting":
					await import("../components/pk-modal-portfolio-charting/pk-modal-portfolio-charting.js");
					break;
				case "portfolio-tonic":
					await import("../components/pk-modal-portfolio-tonic/pk-modal-portfolio-tonic.js");
					break;
				case "portfolio-tipp-game":
					await import("../components/pk-modal-portfolio-tipp-game/pk-modal-portfolio-tipp-game.js");
					break;
				case "video-youtube":
					await import("../components/pk-modal-video-youtube/pk-modal-video-youtube.js");
					break;
				case "audio-soundcloud":
					await import("../components/pk-modal-audio-soundcloud/pk-modal-audio-soundcloud.js");
					break;
				case "blog":
					await import("../components/pk-modal-blog/pk-modal-blog.js");
					break;
			}
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
