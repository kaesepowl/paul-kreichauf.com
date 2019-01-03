const { rewrite } = require("./rewrite");

const createEvent = uri => ({
	Records: [
		{
			cf: {
				request: {
					headers: {},
					clientIp: "2001:cdba::3257:9652",
					uri: uri,
					method: "GET"
				}
			}
		}
	]
});

describe("sam rewrite should append index.html on uris ending with /", () => {
	test("/ uri", () => {
		const callback = jest.fn();
		const event = createEvent("/");
		//
		rewrite(event, null, callback);
		//
		expect(callback.mock.calls.length).toBe(1);
		expect(callback.mock.calls[0][0]).toBeNull();
		expect(callback.mock.calls[0][1]).toEqual(
			createEvent("/index.html").Records[0].cf.request
		);
	});
	test("/blog uri", () => {
		const callback = jest.fn();
		const event = createEvent("/blog");
		//
		rewrite(event, null, callback);
		//
		expect(callback.mock.calls.length).toBe(1);
		expect(callback.mock.calls[0][0]).toBeNull();
		expect(callback.mock.calls[0][1]).toEqual(
			createEvent("/blog").Records[0].cf.request
		);
	});
	test("/blog/ uri", () => {
		const callback = jest.fn();
		const event = createEvent("/blog/");
		//
		rewrite(event, null, callback);
		//
		expect(callback.mock.calls.length).toBe(1);
		expect(callback.mock.calls[0][0]).toBeNull();
		expect(callback.mock.calls[0][1]).toEqual(
			createEvent("/blog/index.html").Records[0].cf.request
		);
	});
	test("/test.jpg uri", () => {
		const callback = jest.fn();
		const event = createEvent("/test.jpg");
		//
		rewrite(event, null, callback);
		//
		expect(callback.mock.calls.length).toBe(1);
		expect(callback.mock.calls[0][0]).toBeNull();
		expect(callback.mock.calls[0][1]).toEqual(
			createEvent("/test.jpg").Records[0].cf.request
		);
	});
});
