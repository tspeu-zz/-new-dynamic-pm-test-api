'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('resources service', function() {
  it('registered the resources service', () => {
    assert.ok(app.service('resources'));
  });
});
