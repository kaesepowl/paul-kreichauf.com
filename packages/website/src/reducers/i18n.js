import { I18N_LOAD_TRANSLATION, I18N_SET_CURRENT } from "../actions/i18n";

const DEFAULT_STATE = {
	loaded: {},
	current: null
};

export const i18n = (state = DEFAULT_STATE, { type, payload }) => {
	switch (type) {
		case I18N_SET_CURRENT:
			return {
				...state,
				current: payload.current
			};
		case I18N_LOAD_TRANSLATION:
			return {
				...state,
				loaded: {
					...state.loaded,
					[payload.key]: payload.data
				}
			};
		default:
			return state;
	}
};
