var mocha = require('mocha');
var chai = require('chai');

chai.should();

var ShoppingCart = require('../src/shoppingCart');


describe('ShoppingCart', () => {
    // beforeEach(() => {
        
    // });

    describe('#getLogicConfig(level)', () => {
        it('get VIP member logic config', () => {
            // Arrange
            var level = 'VIP'
            var expected = {
                atLeastPay : 500,
                pcs : 0,
                discount : 0.8
            }
            var shoppingCart = new ShoppingCart();

            // Act
            var actual = shoppingCart.getLogicConfig(level);
            // Assert
            actual.should.deep.equal(expected)
        });

        it('get Normal member logic config', () => {
            // Arrange
            var level = 'Normal'
            var expected = {
                atLeastPay : 1000,
                pcs : 3,
                discount : 0.85
            }
            var shoppingCart = new ShoppingCart();
            // Act
            var actual = shoppingCart.getLogicConfig(level);

            // Assert
            actual.should.deep.equal(expected)
        });

    });
});














