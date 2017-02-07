'use strict';
const CFClient = require('cloudflare');
const client = new CFClient({
    email: process.env.CF_EMAIL,
    key: process.env.CF_API_KEY
});

const zoneId = process.env.CF_ZONE_ID;
const recordId = process.env.CF_RECORD_ID;

module.exports.list = (event, context, callback) => {
	let response = {
		statusCode: 200
	};
  client.browseDNS(zoneId).then((zone) => {
  	response.body = JSON.stringify(zone);
  	callback(null, response);
  })
};

// Handle a webhook from Rackspace Cloud Monitoring
module.exports.handleWebhook = (event, context, callback) => {
	let record = client.readDNS(recordId).then((record) => {
		response.body = JSON.stringify(record);
		callback(null, {statusCode: 200});
	})

};