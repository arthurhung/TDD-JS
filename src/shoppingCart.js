function ShoppingCart() {
}

ShoppingCart.prototype.getLogicConfig = function (level) {
    switch (level) {
        case 'VIP':
            config = {
                'atLeastPay': 500,
                'pcs': 0,
                'discount': 0.8
            };
            break;
        default:
            config = {
                'atLeastPay': 1000,
                'pcs': 3,
                'discount': 0.85
            };
    }

    return config;
}

ShoppingCart.prototype.checkPriceAndLeastPay = function (price, atLeastPay) {
    if (price >= atLeastPay) {
        return true;
    }
    return false;
}

ShoppingCart.prototype.checkLeastPcs = function (quantity, pcs) {
    if (quantity >= pcs) {
        return true;
    }
    return false;
}

module.exports = ShoppingCart;