import { createSelector } from "reselect";

export const i18nGetCurrent = state => state.i18n.current;
export const i18nGetLoaded = state => state.i18n.loaded;

export const i18nGetTranslation = createSelector(
	i18nGetCurrent,
	i18nGetLoaded,
	(current, loaded) => loaded[current] || {}
);
