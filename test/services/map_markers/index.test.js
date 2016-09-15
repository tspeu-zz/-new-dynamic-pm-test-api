'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('map_markers service', function() {
  it('registered the map_markers service', () => {
    assert.ok(app.service('map_markers'));
  });
});
