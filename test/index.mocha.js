var lorem = require('../');

describe('Lorem:', function() {

    it('should be a function', function() {
        lorem.should.be.type('function');
    });

    it('should return lorem', function() {
        lorem().should.equal('lorem');
    });
});
