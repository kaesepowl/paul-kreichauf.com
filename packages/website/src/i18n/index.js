export default (lang = "de") => {
	return fetch(`/src/i18n/${lang}.json`).then(res => res.json());
};
