var Lorem, carcass, config, debug;

debug = require('debug')('carcass:lorem');

carcass = require('carcass');

config = require('carcass-config');


/**
 * Lorem.
 */

module.exports = Lorem = (function() {

  /**
   * Constructor.
   */
  function Lorem(options) {
    this.id(options);
    debug('initializing the %s lorem.', this.id());
  }

  return Lorem;

})();


/**
 * Mixins.
 */

carcass.mixable(Lorem);

Lorem.prototype.mixin(carcass.proto.uid);

Lorem.prototype.mixin(config.proto.consumer);
