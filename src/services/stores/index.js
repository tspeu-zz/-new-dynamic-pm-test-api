'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function () {
	const app = this;

	const db = new NeDB({
		filename: path.join(app.get('nedb'), 'stores.db'),
		autoload: true
	});

	let options = {
		Model: db,
		paginate: {
			default: 100,
			max: 100
		}
	};

	// Initialize our service with any options it requires
	app.use('/stores', service(options));

	// Get our initialize service to that we can bind hooks
	const storesService = app.service('/stores');

	// Set up our before hooks
	storesService.before(hooks.before);

	// Set up our after hooks
	storesService.after(hooks.after);

  /*
	storesService.create({
		name: "London Store 2",
		address: "London, Uk",
		store_id: "0",
		phone: "44 20 555 555",
		description: "Trafalgar Square",
		lat: 51.5084427,
		lng: -0.127752,

	}).then(function (options) {
		console.log('Created message', options);
	});
*/



};