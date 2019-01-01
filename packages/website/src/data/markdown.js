let initCalled = false;
let showdownLoadPromise;
let con;
const loadShowdown = () => {
	if (initCalled === false) {
		showdownLoadPromise = new Promise((resolve, reject) => {
			const script = document.createElement("script");
			script.src = "/node_modules/showdown/dist/showdown.min.js";
			document.head.appendChild(script);
			script.addEventListener("load", resolve);
			script.addEventListener("error", reject);
		});
		initCalled = true;
	}
	return showdownLoadPromise;
};

const getConverter = async () => {
	await loadShowdown();
	if (!con) {
		con = new showdown.Converter({
			extensions: [
				{
					type: "output",
					regex: /(<\s*\/?\s*)h1(\s*([^>]*)?\s*>)/gi,
					replace: (match, $1, $2) => {
						if (match !== "</h1>") {
							return `${$1}pk-element-headline a="b"${$2}`;
						}
						return `${$1}pk-element-headline${$2}`;
					}
				}
			]
		});
	}
	return con;
};

export const getHtmlByMarkdown = async md => {
	try {
		const [converter, res] = await Promise.all([
			getConverter(),
			fetch(`/src/data/blog/${md}`)
		]);
		const text = await res.text();
		return converter.makeHtml(text);
	} catch (e) {
		throw e;
	}
};
