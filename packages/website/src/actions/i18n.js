export const I18N_LOAD_TRANSLATION = "I18N_LOAD_TRANSLATION";
export const I18N_SET_CURRENT = "I18N_SET_CURRENT";

export const i18nLoadTranslation = (key, data) => ({
	type: I18N_LOAD_TRANSLATION,
	payload: { key, data }
});

export const i18nSetCurrent = current => ({
	type: I18N_SET_CURRENT,
	payload: { current }
});
