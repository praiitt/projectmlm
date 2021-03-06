'use strict';

/**
 * Module dependencies
 */
var registersPolicy = require('../policies/registers.server.policy'),
  registers = require('../controllers/registers.server.controller');

module.exports = function(app) {
  // Registers Routes
  app.route('/api/registers')
    .get(registers.list)
    .post(registers.create);

  app.route('/api/registers/:registerId')
    .get(registers.read)
    .put(registers.update)
    .delete(registers.delete);

  // Finish by binding the Register middleware
  app.param('registerId', registers.registerByID);
};
