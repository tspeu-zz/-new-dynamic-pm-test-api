'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function () {
	const app = this;

	const db = new NeDB({
		filename: path.join(app.get('nedb'), 'jobs.db'),
		autoload: true
	});

	let options = {
		Model: db,
		paginate: {
			default: 100,
			max: 250
		}
	};

	/*
// Connect to the db, create and register a Feathers service.
app.use('/messages', service({
  Model: db,
  paginate: {
    default: 2,
    max: 4
  }
}));

// Create a dummy Message
  app.service('messages').create({
    text: 'Oh hai!',
    complete: false
  }).then(function(message) {
    console.log('Created message', message);
  });




	// Create a dummy Message
	app.service(options).create({
		text: 'Oh hai!',
		complete: false
	}).then(function (options) {
		console.log('Created message', options);
	});
*/


	// Initialize our service with any options it requires
	app.use('/jobs', service(options));

	// Get our initialize service to that we can bind hooks
	const jobsService = app.service('/jobs');

	// Set up our before hooks
	jobsService.before(hooks.before);

	// Set up our after hooks
	jobsService.after(hooks.after);

	/*
		jobsService.create({
			text: 'Oh hai!',
			complete: false
		}).then(function (options) {
			console.log('Created message', options);
		});
	*/
};