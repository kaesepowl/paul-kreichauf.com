"use strict";
//
exports.handler = (event, context, callback) => {
	// Get request from CloudFront event
	var request = event.Records[0].cf.request;
	// Extract the URI from the request
	var requestUrl = request.uri;
	//
	if (requestUrl.indexOf(".") === -1) {
		// Replace the received URI with the URI that includes the index page
		request.uri = "/index.html";
	}

	// Return to CloudFront
	return callback(null, request);
};
