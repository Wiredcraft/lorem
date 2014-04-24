var carcass, config, lib, lorem, path;

lorem = require('../');

carcass = require('carcass');

config = require('carcass-config');

module.exports = lib = carcass.mixable();

lib.mixin(carcass.proto.register);

lib.mixin(config.proto.manager);

lib.extend(lorem, 'classes');

path = require('path');

lib.configDir(path.resolve(__dirname, 'configs')).initConfig();
