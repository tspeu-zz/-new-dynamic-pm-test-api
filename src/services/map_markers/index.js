'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'map_markers.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: {
      default: 10,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/map_markers', service(options));

  // Get our initialize service to that we can bind hooks
  const map_markersService = app.service('/map_markers');

  // Set up our before hooks
  map_markersService.before(hooks.before);

  // Set up our after hooks
  map_markersService.after(hooks.after);
};
