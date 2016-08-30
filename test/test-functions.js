describe("Test Functions", function() {
    beforeEach(function() {
      var div = document.createElement("div");
      div.id = 'test';
      document.body.appendChild(div);
    });

    afterEach(function() {
      document.body.removeChild(document.querySelector('#test'));
    })

    context('on - delegate - live', function() {
        it("", function() {
            expect(document).to.not.equal(null);
        });
    });

    context('off', function() {
        it("", function() {
            expect(document).to.not.equal(null);
        });
    });

    context('show', function() {
        it("canvas is in the DOM", function() {
            expect(document).to.not.equal(null);
        });
    });

    context('hide', function() {
        it("canvas is in the DOM", function() {
            expect(document).to.not.equal(null);
        });
    });

    // Following Toggle Docs https://api.jquery.com/addclass/
    context('addClass', function() {
        it('should add class', function() {
            expect($('#test')).to.not.equal(null);
            expect($('#test')).to.not.equal(undefined);

            var native = document.querySelector('#test').classList;
            expect(native.toString()).to.be.equal("");
            expect($('#test').addClass).to.be.a('function');

            $('#test').addClass('some-class');
            expect(native.toString()).to.be.equal('some-class');

            $('#test').addClass('random');
            expect(native.toString()).to.be.equal('some-class random');
        });
    });


    // Following Toggle Docs https://api.jquery.com/removeclass/
    context('removeClass', function() {
        it('should remove class', function() {
            expect($('#test')).to.not.equal(null);
            expect($('#test')).to.not.equal(undefined);

            var native = document.querySelector('#test').classList;
            expect(native.toString()).to.be.equal("");
            expect($('#test').addClass).to.be.a('function');

            $('#test').addClass('some-class');
            expect(native.toString()).to.be.equal('some-class');

            $('#test').removeClass('some-class');
            expect(native.toString()).to.be.equal("");
        });
    });
});
