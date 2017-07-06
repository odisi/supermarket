require('../commons/prototype');

class Cart {
    constructor() {
        this._id = undefined;
        this.itens = [];
        this.company = undefined;
        this.date = new Date();
        this.amount = 0;
    }

    addItem(item) {
        this.itens.push(item);
        this.amount = this.itens.sum((x) => x.amount);
    }
}

module.exports = Cart;