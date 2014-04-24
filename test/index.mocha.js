var lib = require('../');

describe('Index:', function() {

    it('should be an object', function() {
        lib.should.be.type('object');
    });

    it('should have some classes', function() {
        lib.should.have.property('classes').with.type('object');
        lib.classes.should.have.property('Lorem').with.type('function');
    });

});
