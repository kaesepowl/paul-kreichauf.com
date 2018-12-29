const con = new showdown.Converter({
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

export const getHtmlByMarkdown = async md => {
	const res = await fetch(`/src/data/blog/${md}`);
	const text = await res.text();
	return con.makeHtml(text);
};
