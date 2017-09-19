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

module.exports = ShoppingCart;