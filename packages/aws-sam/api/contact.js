const AWS = require("aws-sdk");

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
		if (!name || !email || !message) {
			throw new Error("Invalid or missing Parameter.");
		}
		// get template
		const template = createEmailTemplate({
			email,
			message,
			subject: `Message from ${name}`
		});
		// send mail
		const res = await sesClient.sendEmail(template).promise();
		// send back 200 if all went good
		return {
			statusCode: 200
		};
	} catch (e) {
		console.error(e);
		return { statusCode: 500 };
	}
};
exports.createEmailTemplate = createEmailTemplate;
