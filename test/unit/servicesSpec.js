'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('phonecatApp'));

  it('check the avalability of Phone Factory', inject(function(Phone) {
    expect(Phone).toBeDefined();
  }));
});
