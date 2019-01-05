const { handler } = require("./contact");
const AWS = require("aws-sdk-mock");
const Joi = require("joi");
AWS.mock("SES", "sendEmail", "test-message");

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

test("execute - parameter missing", async () => {
	const res = await handler({
		body: JSON.stringify({
			name: "TEST",
			message: "Hi"
		})
	});
	expect(res).toEqual({ statusCode: 500 });
});
