class Item {
    constructor() {
        this.product = undefined;
        this.quantity = 0;
        this.price = 0;
    }

    get amount() {
        return this.price * this.quantity;
    }
}

module.exports = Item;