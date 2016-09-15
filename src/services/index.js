'use strict';
const stores = require('./stores');
const resources = require('./resources');
const mapMarkers = require('./map_markers');
const names = require('./names');
const jobs = require('./jobs');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(jobs);
  app.configure(names);
  app.configure(mapMarkers);
  app.configure(resources);
  app.configure(stores);
};
