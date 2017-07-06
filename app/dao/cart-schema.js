var mongoose = require('mongoose');

class CartSchema {
    static cart() {
        return mongoose.Schema({
            itens: [CartSchema.item()],
            company: CartSchema.company(),
            date: Date,
            amount: Number
        });
    }

    static item() {
        return mongoose.Schema({
            _id: false,
            product: CartSchema.product(),
            quantity: Number,
            price: Number
        });
    }

    static product() {
        return mongoose.Schema({
            _id: false,
            name: String,
            barcode: String,
            image: String,
            quantity: Number,
            measure: String,
            brand: String,
            section: String
        });
    }

    static company() {
        return mongoose.Schema({
            _id: false,
            name: String,
            image: String,
            address: CartSchema.address(),
            cnpj: String,
            url: String
        });
    }

    static address() {
        return mongoose.Schema({
            _id: false,
            name: String,
            number: String,
            complement: String,
            zipCode: String,
            neighborhood: String,
            city: String,
            state: String,
            location: CartSchema.location()
        });
    }

    static location() {
        return mongoose.Schema({
            _id: false,
            type: String,
            coordinates: Array
        });
    }
}

module.exports = mongoose.model('Cart', CartSchema.cart());