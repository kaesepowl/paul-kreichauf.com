const conf = {
	suites: ["./test/unit/index.html"],
	skipSeleniumInstall: true,
	verbose: false,
	npm: true,
	plugins: {
		local: {
			browsers: ["chrome"],
			browserOptions: {
				chrome: [
					"--headless",
					"--disable-gpu",
					"--no-sandbox",
					"--disable-dev-shm-usage"
				]
			}
		},
		istanbub: {
			dir: "./coverage",
			reporters: ["text-summary", "lcov", "html"],
			include: ["/src/components/**/*.js"],
			exclude: ["**/test/**"]
		}
	}
};

module.exports = conf;
