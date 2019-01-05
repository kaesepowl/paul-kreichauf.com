const AWS = require("aws-sdk");
const Joi = require("joi");

const schema = Joi.object().keys({
	name: Joi.string()
		.min(3)
		.max(100)
		.required(),
	email: Joi.string()
		.email({ minDomainAtoms: 2 })
		.required(),
	message: Joi.string()
		.max(5000)
		.required()
});

const createEmailTemplate = ({ message, subject, email }) => ({
	Destination: {
		ToAddresses: ["info@paul-kreichauf.com"]
	},
	Message: {
		Body: {
			Text: {
				Data: message
			}
		},
		Subject: {
			Data: subject
		}
	},
	Source: "info@paul-kreichauf.com",
	ReplyToAddresses: [email]
});

exports.handler = async event => {
	const sesClient = new AWS.SES();
	try {
		// get parameter from event
		const { name, email, message } = JSON.parse(event.body);
		// check if all needed parameters are set
		const validationResult = Joi.validate({ name, email, message }, schema);
		if (validationResult.error !== null) {
			throw validationResult.error;
		}
		// get template
		const template = createEmailTemplate({
			email,
			message,
			subject: `Message from ${name} [${email}]`
		});
		// send mail
		const res = await sesClient.sendEmail(template).promise();
		// send back 200 if all went good
		return {
			statusCode: 200
		};
	} catch (e) {
		console.error(e);
		return { statusCode: 400 };
	}
};
exports.createEmailTemplate = createEmailTemplate;
