process.env.DEBUG = 'lorem:*';
var debug = require('debug')('lorem:gulp');

var Metalsmith = require('metalsmith');
var collections = require('metalsmith-collections');
var ignore = require('metalsmith-ignore');
var markdown = require('metalsmith-markdown');
var metadata = require('metalsmith-metadata');
var permalinks = require('metalsmith-permalinks');
var sass = require('metalsmith-sass');
var templates = require('metalsmith-templates');

var _ = require('lodash');
var highlight = require('highlight.js');
var eggshell = require('eggshell');

var path = require('path');
var root = path.resolve(__dirname);

var docs = require('./src/docs.json');

module.exports = metalsmith;

/**
 * Helper.
 *
 * Invoke Metalsmith.
 */
function metalsmith(options, done) {
    Metalsmith(root)
        .destination(options.destination || 'build')
        .use(metadata({
            meta: options.meta || 'meta.yaml'
        }))
        .use(sass({
            outputStyle: 'compressed',
            includePaths: eggshell.includePaths,
            outputDir: 'assets/css'
        }))
        .use(collections(docs))
        .use(collectionMeta)
        .use(markdown({
            gfm: true,
            highlight: function(code, lang) {
                if (lang) return highlight.highlight(lang, code).value;
                return highlight.highlightAuto(code).value;
            }
        }))
        .use(permalinks({
            pattern: ':collection/:title'
        }))
        .use(buildId)
        .use(promote)
        .use(templates('jade'))
        .use(ignore([
            '**/_*',
            '*.yaml'
        ]))
        // .use(_debug)
        .build(done);
}

/**
 * Metalsmith plugin.
 *
 * Build an ID with either the file path or the file name.
 */
function buildId(files, metalsmith, done) {
    for (var name in files) {
        if (!files[name].id) {
            var id = '';
            if (files[name].path) {
                id = files[name].path;
            } else {
                id = path.basename(name, path.extname(name));
            }
            files[name].id = id.replace(/[^\w\-]/g, '-');
        }
    }
    done();
}

/**
 * Metalsmith plugin.
 *
 * Group the collections by promoted or not.
 */
function promote(files, metalsmith, done) {
    var metadata = metalsmith.metadata();
    metadata.promoted = {};
    metadata.notPromo = {};
    _.each(metadata.collections, function(coll, key) {
        var promoted = _.filter(coll, 'promoted');
        if (!_.isEmpty(promoted)) {
            metadata.promoted[key] = promoted;
        }
        var notPromo = _.reject(coll, 'promoted');
        if (!_.isEmpty(notPromo)) {
            metadata.notPromo[key] = notPromo;
        }
    });
    done();
}

/**
 * Metalsmith plugin.
 *
 * Save the settings for collections somewhere.
 */
function collectionMeta(files, metalsmith, done) {
    var metadata = metalsmith.metadata();
    metadata.meta.collections = docs;
    done();
}

/**
 * Metalsmith plugin.
 */
function _debug(files, metalsmith, done) {
    debug('files', files);
    var metadata = metalsmith.metadata();
    debug('metadata', metadata);
    done();
}
