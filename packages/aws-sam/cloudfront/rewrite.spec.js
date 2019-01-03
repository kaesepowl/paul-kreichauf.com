const { handler } = require("./rewrite");

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

test("/ root redirect to index.html", () => {
	const callback = jest.fn();
	const event = createEvent("/");
	//
	handler(event, null, callback);
	//
	expect(callback.mock.calls.length).toBe(1);
	expect(callback.mock.calls[0][0]).toBeNull();
	expect(callback.mock.calls[0][1]).toEqual(
		createEvent("/index.html").Records[0].cf.request
	);
});
test("/blog redirect to index.html", () => {
	const callback = jest.fn();
	const event = createEvent("/blog");
	//
	handler(event, null, callback);
	//
	expect(callback.mock.calls.length).toBe(1);
	expect(callback.mock.calls[0][0]).toBeNull();
	expect(callback.mock.calls[0][1]).toEqual(
		createEvent("/index.html").Records[0].cf.request
	);
});
test("ending with slash redirect to index.html", () => {
	const callback = jest.fn();
	const event = createEvent("/blog/");
	//
	handler(event, null, callback);
	//
	expect(callback.mock.calls.length).toBe(1);
	expect(callback.mock.calls[0][0]).toBeNull();
	expect(callback.mock.calls[0][1]).toEqual(
		createEvent("/index.html").Records[0].cf.request
	);
});
test("it ignores get parameter", () => {
	const callback = jest.fn();
	const event = createEvent("/blog/?asd=a.a");
	//
	handler(event, null, callback);
	//
	expect(callback.mock.calls.length).toBe(1);
	expect(callback.mock.calls[0][0]).toBeNull();
	expect(callback.mock.calls[0][1]).toEqual(
		createEvent("/index.html").Records[0].cf.request
	);
});
test("it cares only about the last part", () => {
	const callback = jest.fn();
	const event = createEvent("/aaa.bbb/blog/");
	//
	handler(event, null, callback);
	//
	expect(callback.mock.calls.length).toBe(1);
	expect(callback.mock.calls[0][0]).toBeNull();
	expect(callback.mock.calls[0][1]).toEqual(
		createEvent("/index.html").Records[0].cf.request
	);
});
test("it ignores hashes", () => {
	const callback = jest.fn();
	const event = createEvent("/blog#aaa.bbb");
	//
	handler(event, null, callback);
	//
	expect(callback.mock.calls.length).toBe(1);
	expect(callback.mock.calls[0][0]).toBeNull();
	expect(callback.mock.calls[0][1]).toEqual(
		createEvent("/index.html").Records[0].cf.request
	);
});
test("/test.jpg uri", () => {
	const callback = jest.fn();
	const event = createEvent("/test.jpg");
	//
	handler(event, null, callback);
	//
	expect(callback.mock.calls.length).toBe(1);
	expect(callback.mock.calls[0][0]).toBeNull();
	expect(callback.mock.calls[0][1]).toEqual(
		createEvent("/test.jpg").Records[0].cf.request
	);
});
