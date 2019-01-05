export const FORMS_ADD_SENDING = "FORMS_ADD_SENDING";
export const FORMS_REMOVE_SENDING = "FORMS_REMOVE_SENDING";

export const sendContactMessage = ({
	name = "",
	email = "",
	message = ""
}) => async (dispatch, getState) => {
	try {
		dispatch(addSendingForm("contact"));
		//
		await fetch("https://api.paul-kreichauf.com/v1/contact", {
			method: "POST",
			mode: "no-cors",
			body: JSON.stringify({ name, email, message })
		});
		// delay a bit so the user can see the overlay
		await new Promise(res => setTimeout(res, 1000));
		//
		dispatch(removeSendingForm("contact"));
	} catch (e) {
		console.error(e);
	}
};

export const addSendingForm = name => ({
	type: FORMS_ADD_SENDING,
	payload: { name }
});

export const removeSendingForm = name => ({
	type: FORMS_REMOVE_SENDING,
	payload: { name }
});
