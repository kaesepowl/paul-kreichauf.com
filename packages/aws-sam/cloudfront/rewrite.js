"use strict";
//
exports.handler = (event, context, callback) => {
	// Get request from CloudFront event
	const { request } = event.Records[0].cf;
	// Extract the URI from the request
	const requestUriWithoutHash = request.uri.split("#")[0];
	const requestUrlPath = requestUriWithoutHash.split("?")[0];
	const lastPathPart = requestUrlPath.split("/").pop();
	//
	if (lastPathPart.indexOf(".") === -1) {
		// Replace the received URI with the URI that includes the index page
		request.uri = "/index.html";
	}
	// Return to CloudFront
	return callback(null, request);
};
