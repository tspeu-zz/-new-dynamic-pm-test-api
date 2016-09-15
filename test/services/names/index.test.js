'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('names service', function() {
  it('registered the names service', () => {
    assert.ok(app.service('names'));
  });
});
