var example = require('../example');

describe('Example:', function() {

    it('should be an object', function() {
        example.should.be.type('object');
    });

    it('should have some classes', function() {
        example.should.have.property('classes').with.type('object');
        example.classes.should.have.property('Lorem').with.type('function');
    });

    it('should not have configs yet', function() {
        example.should.have.property('settings').with.type('object');
        example.settings.should.not.have.property('lorem');
    });

    it('can load configs', function(done) {
        example.reload(done);
    });

    it('should have configs now', function() {
        example.settings.should.have.property('lorem').with.type('object');
    });

    it('can get a consumer', function() {
        var lorem = example.getConsumer('Lorem', 'lorem');
        lorem.should.be.type('object');
        lorem.should.have.property('config').with.type('function');
        lorem.config().should.eql({
            something: true
        });
    });

});
