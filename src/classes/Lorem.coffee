debug = require('debug')('carcass:lorem')

carcass = require('carcass')
config = require('carcass-config')

###*
 * Lorem.
###
module.exports = class Lorem
    ###*
     * Constructor.
    ###
    constructor: (options) ->
        @id(options)
        debug('initializing the %s lorem.', @id())

###*
 * Mixins.
###
carcass.mixable(Lorem)
Lorem::mixin(carcass.proto.uid)
Lorem::mixin(config.proto.consumer)
