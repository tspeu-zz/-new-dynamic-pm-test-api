'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'resources.db'),
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
  app.use('/resources', service(options));

  // Get our initialize service to that we can bind hooks
  const resourcesService = app.service('/resources');

  // Set up our before hooks
  resourcesService.before(hooks.before);

  // Set up our after hooks
  resourcesService.after(hooks.after);
};
