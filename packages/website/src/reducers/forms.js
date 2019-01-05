import { FORMS_ADD_SENDING, FORMS_REMOVE_SENDING } from "../actions/forms";

const DEFAULT_STATE = {
	sending: []
};

export const forms = (state = DEFAULT_STATE, { type, payload }) => {
	switch (type) {
		case FORMS_ADD_SENDING:
			return {
				...state,
				sending: [...state.sending, payload.name]
			};
		case FORMS_REMOVE_SENDING:
			return {
				...state,
				sending: state.sending.filter(form => form !== payload.name)
			};
		default:
			return state;
	}
};
