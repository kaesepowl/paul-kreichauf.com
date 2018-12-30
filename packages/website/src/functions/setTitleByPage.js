export const setTitleByPage = (page, document) => {
	const TITLE_PAGE_MAP = {
		home: "Paul Kreichauf",
		blog: "Blog - Paul Kreichauf",
		about: "About - Paul Kreichauf",
		resume: "Resume - Paul Kreichauf",
		portfolio: "Portfolio - Paul Kreichauf",
		contact: "Contact - Paul Kreichauf"
	};
	if (TITLE_PAGE_MAP[page]) {
		document.title = TITLE_PAGE_MAP[page];
	} else {
		document.title = "404 - Paul Kreichauf";
	}
};
