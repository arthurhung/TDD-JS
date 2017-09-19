var mocha = require('mocha');
var chai = require('chai');

chai.should();

var ShoppingCart = require('../src/shoppingCart');

beforeEach(() => {
    shoppingCart = new ShoppingCart();
});
describe('ShoppingCart', () => {


    describe('#getLogicConfig(level)', () => {
        it('get VIP member logic config', () => {
            // Arrange
            var level = 'VIP'
            var expected = {
                atLeastPay : 500,
                pcs : 0,
                discount : 0.8
            }
            

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
            // Act
            var actual = shoppingCart.getLogicConfig(level);

            // Assert
            actual.should.deep.equal(expected)
        });

    });

    describe('#checkPriceAndLeastPay(price, atLeastPay)', () => {
        it('如果滿額，return True', () => {
            // Arrange
            var price = 500;
            var atLeastPay = 500;
            var expected = true;

            // Act
            var actual = shoppingCart.checkPriceAndLeastPay(price, atLeastPay);
            // Assert
            actual.should.equal(expected)
        });

        it('如果沒有滿額，return False', () => {
            // Arrange
            var price = 499;
            var atLeastPay = 500;
            var expected = false;

            // Act
            var actual = shoppingCart.checkPriceAndLeastPay(price, atLeastPay);
            // Assert
            actual.should.equal(expected)
        });
    });

    describe('#checkLeastPcs(quantity, pcs)', () => {
        it('如果達最低商品數量，return True', () => {
            // Arrange
            var quantity = 3;
            var pcs = 3;
            var expected = true;

            // Act
            var actual = shoppingCart.checkPriceAndLeastPay(price, atLeastPay);
            // Assert
            actual.should.equal(expected)
        });

        it('如果未達最低商品數量，return False', () => {
            // Arrange
            var quantity = 2;
            var pcs = 3;
            var expected = false;

            // Act
            var actual = shoppingCart.checkPriceAndLeastPay(price, atLeastPay);
            // Assert
            actual.should.equal(expected)
        });
    });




});














