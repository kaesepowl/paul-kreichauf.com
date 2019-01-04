const { handler } = require("./contact");
const { mock } = require("aws-sdk-mock");
mock("SES", "sendEmail", "test-message");

const event = {
	body: JSON.stringify({
		name: "TEST",
		email: "test@paul-kreichauf.com",
		message: "Hi"
	})
};

test("execute", async () => {
	const res = await handler(event);

	expect(res).toEqual({ statusCode: 200 });
});
